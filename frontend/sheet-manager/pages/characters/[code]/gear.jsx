import CharacterNavigation from "@/src/components/characters/_navigation"
import Container from "@/src/components/container"
import { useRouter } from "next/router"
import MainLayout from "@/src/layouts/main_layout"
import Title from "@/src/components/title"
import { VscRequestChanges } from "react-icons/vsc";
import { FaDiceD20 } from "react-icons/fa";
import useCharacter from "@/src/apiHooks/useCharacter"
import useLogin from "hooks/use_login"
import { useEffect, useContext } from 'react'
import { DiceRollerContext } from '@/src/contexts/dice_roller_context';
import { GiMagicPortal } from "react-icons/gi";
import Button from "@/src/components/button"
import SessionExpired from "@/src/components/session_expired"

export function MinMaxResource ({ label, current, max, onChange }) {
  return (
    <div>
      <div className="labels">
        {label}
      </div>
      <div className="currentvalues flex items-center gap-1.5 mt-1">
        <div className="bg-deep-space-sparkle border-black min-w-10 text-center rounded-lg border p-1.5">
          {current}
        </div>
        <div>
          /
        </div>
        <div className="bg-aero-blue border-black rounded-lg min-w-10 text-center border p-1.5 text-gunmetal font-bold">
          {max}
        </div>
        <button onClick={onChange} className="bg-lavender-blue border-black rounded-lg border p-2 text-gunmetal font-bold text-2xl">
          <VscRequestChanges />
        </button>
      </div>

      <div className="breakdown">
      </div>
    </div>
  )
}

export function Attribute ({ value, label, color = '#67777C', onRoll }) {
  return (
    <div>
      <label className="text-center block">{label}</label>
      <div className="border p-2 relative mt-1 border-black rounded-lg shadow-lg" style={{
        backgroundColor: `color-mix(in srgb, ${color} 50%, black)`,
      }}>
        <div className="absolute left-[-1px] w-[20px] h-[1px] border-t border-black rotate-45"></div>
        <div className="absolute right-[-1px] w-[20px] h-[1px] border-t border-black -rotate-45"></div>
        <div className="absolute bottom-[6px] left-[-1px] w-[15px] h-[1px] border-t border-black rotate-[135deg]"></div>
        <div className="absolute bottom-[6px] right-[0px] w-[15px] h-[1px] border-t border-black -rotate-[135deg]"></div>
        <div className="relative">
          <div className="border border-black rounded-lg text-5xl text-center py-4 font-bold font-adobe-kis brightness-100" style={{
            background: `linear-gradient(0deg, color-mix(in srgb, ${color} 60%, color-mix(in srgb, ${color} 50%, black)) 50%, ${color} 50%)`,
            color: `color-mix(in srgb, ${color} 30%, black)`,
          }}>
            { value > 0 ? `+${value}` : value}
          </div>
          <button onClick={onRoll} className="absolute border border-black bottom-[-25px] left-[calc(50%-0.75em)] bg-lavender-blue text-black p-1.5 rounded-lg text-2xl">
            <FaDiceD20 />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Gear() {
  const router = useRouter()
  const { token, ping } = useLogin()
  const { code } = router.query

  const { rollDice } = useContext(DiceRollerContext)

  const { data: character } = useCharacter({
    code, token
  })

  useEffect(() => {
    ping()
  }, [router])

  if (!character) return "Loading..."
  if (character.error) return <SessionExpired/>

  return (
    <MainLayout>
      <div className="px-2 sm:px-10 md:px-20 lg:px-32">
        <Title>Ficha</Title>

        <div className="grid grid-cols-2 mt-7 gap-7">
          <div>
            <MinMaxResource label="Pontos de Vida" current={character.hp_points} max={character.max_hp_points} onChange={e => { console.log("Click") }} />
          </div>
          <div>
            <MinMaxResource label="Pontos de Magia" current={character.mp_points} max={character.max_mp_points} onChange={e => {}} />
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-7 mt-7">
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_strength, description: 'Modificador de Força' }]})} label={'Força'} value={character.base_strength} color={'#FC6363'} />
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_resilience, description: 'Modificador de Resiliência' }]})} label={'Resiliência'} value={character.base_resilience} color={'#FBA43F'} />
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_agility, description: 'Modificador de Agilidade' }]})} label={'Agilidade'} value={character.base_agility} color={'#FFF856'} />
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_magic_elo, description: 'Modificador de Elo Mágico' }]})} label={'EloMágico'} value={character.base_magic_elo} color={'#FF7AE2'} />
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_intelect, description: 'Modificador de Intelecto' }]})} label={'Intelecto'} value={character.base_intelect} color={'#6A77F0'} />
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_spirit, description: 'Modificador de Espírito' }]})} label={'Espírito'} value={character.base_spirit} color={'#65DFF0'} />
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_survival, description: 'Modificador de Sobrevivência' }]})} label={'Sobrevivência'} value={character.base_survival} color={'#93FA97'} />
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_influence, description: 'Modificador de Influência' }]})} label={'Influência'} value={character.base_influence} color={'#765C56'} />
          <Attribute onRoll={e => rollDice({ formula: '2d20', modifiers: [{ value: character.base_destiny, description: 'Modificador de Destino' }]})} label={'Destino'} value={character.base_destiny} color={'#E6E6E6'} />
        </div>

        <CharacterNavigation tab={'gear'} code={code} />
      </div>
    </MainLayout>
  )
}
