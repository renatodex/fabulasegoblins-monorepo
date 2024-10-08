import { useRouter } from "next/router"
import Title from "@/src/components/title"
import { VscRequestChanges } from "react-icons/vsc";
import { FaDiceD20 } from "react-icons/fa";
import useCharacter from "@/src/apiHooks/useCharacter"
import useLogin from "hooks/use_login"
import { useEffect, useContext, useState } from 'react'
import { DiceRollerContext } from '@/src/contexts/dice_roller_context';
import { GiGooeyImpact } from "react-icons/gi";
import SessionExpired from "@/src/components/session_expired"
import { CgMenuGridR } from "react-icons/cg";
import { useCharacterViewLayout } from "@/src/layouts/character_view_layout"
import { AppModalContext, AppModalContent } from "@/src/contexts/app_modal";
import Button from "@/src/components/button";
import { ChangeResourceModal } from "@/src/modals/change_resource_modal";
import useCharacterUpdate from "@/src/apiHooks/useCharacterUpdate";

export function MinMaxResource ({ label, current, max, onChange }) {
  return (
    <div>
      <div className="labels">
        {label}
      </div>
      <div className="currentvalues flex items-center gap-1.5 mt-1">
        <div className="bg-deep-space-sparkle flex-1 border-black min-w-10 text-center rounded-lg border p-1.5">
          {current}
        </div>
        <div>
          /
        </div>
        <div className="bg-aero-blue border-black flex-1 rounded-lg min-w-10 text-center border p-1.5 text-gunmetal font-bold">
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

export function CommonResource ({ rollAction = true, label, current, onChange, icon = <FaDiceD20 /> }) {
  return (
    <div>
      <div className="labels">
        {label}
      </div>
      <div className="currentvalues flex items-center gap-1.5 mt-1">
        <div className="bg-deep-space-sparkle h-9 overflow-y-hidden overflow-x-auto text-nowrap border-black min-w-10 text-center rounded-lg border p-1.5 flex-1">
          {current}
        </div>
        {rollAction && (
          <button onClick={onChange} className="bg-lavender-blue border-black rounded-lg border p-2 text-gunmetal font-bold text-2xl">
            {icon}
          </button>
        )}
      </div>

      <div className="breakdown">
      </div>
    </div>
  )
}

export function DamageResource ({ label, current, damage, onChange, onRollDamage }) {
  return (
    <div>
      <CommonResource label={label} current={current} onChange={onChange} />
      <CommonResource current={damage} onChange={onRollDamage} icon={<GiGooeyImpact/>} />
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

  const { data: character, mutate } = useCharacter({
    code, token
  })

  const { updateCharacter } = useCharacterUpdate({ code, token })

  const { setModalContent } = useContext(AppModalContext)

  const { isNavOpened, CharacterViewLayout, ToggleButton } = useCharacterViewLayout()

  async function handleUpdateCharacter(params) {
    const response = await updateCharacter(character, params)
    setModalContent(null)
    mutate()
  }

  useEffect(() => {
    ping()
  }, [router])

  if (!character) return "Loading..."
  if (character.error) return <SessionExpired/>

  return (
    <CharacterViewLayout isNavOpened={isNavOpened} hasPadding={false}>
      <Title useH1={false}>
        <div className="flex gap-3">
          <ToggleButton />
          <h1 className="self-center flex-1">Ficha</h1>
        </div>
      </Title>

      <div className="grid grid-cols-2 mt-7 gap-7">
        <div>
          <MinMaxResource
            label="Pontos de Vida"
            current={character.hp_points}
            max={character.max_hp_points}
            onChange={e => {
              setModalContent(() => (
                <ChangeResourceModal
                  setModalContent={setModalContent}
                  modalLabel="Alterar Pontos de Vida"
                  label={'Pontos de Vida'}
                  currentPoints={character.hp_points}
                  maxPoints={character.max_hp_points}
                  onSubmit={hp_points => handleUpdateCharacter({ hp_points })}
                />
              ))
            }}
          />
        </div>
        <div>
          <MinMaxResource
            label="Pontos de Magia"
            current={character.mp_points}
            max={character.max_mp_points}
            onChange={e => {
              setModalContent(() => (
                <ChangeResourceModal
                  setModalContent={setModalContent}
                  modalLabel="Alterar Pontos de Magia"
                  label={'Pontos de Magia'}
                  currentPoints={character.mp_points}
                  maxPoints={character.max_mp_points}
                  onSubmit={mp_points => handleUpdateCharacter({ mp_points })}
                />
              ))
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-7 mt-7 pt-7 border-t border-dashed border-gunmetal">
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

      <div className="grid grid-cols-2 gap-7 mt-10 pt-7 border-t border-dashed border-gunmetal">
        <div>
          <DamageResource
            label="Ataque Principal"
            current={character.main_attack}
            damage={character.main_damage}
            onRollDamage={e => rollDice({ damageRoll: true, formula: character.main_damage, modifiers: []})}
            onChange={e => rollDice({ formula: '2d20', modifiers: [{ value: character.main_attack, description: 'Modificador de Ataque Primário' }]})}
          />
        </div>
        {!!character.secondary_attack && (
          <div>
            <DamageResource
              label="Ataque Secundário"
              current={character.secondary_attack}
              damage={character.secondary_damage}
              onChange={e => rollDice({ formula: '2d20', modifiers: [{ value: character.secondary_attack, description: 'Modificador de Ataque Secundário' }]})}
              onRollDamage={e => rollDice({ damageRoll: true, formula: character.secondary_damage, modifiers: []})}
            />
          </div>
        )}
        <div>
          <CommonResource label="Ataque Mágico" current={character.magic_attack} onChange={e => rollDice({ formula: '2d20', modifiers: [{ value: character.magic_attack, description: 'Modificador de Ataque Mágico' }]})} />
        </div>
        <div>
          <CommonResource label="Defesa Física" current={character.physical_defense} onChange={e => rollDice({ formula: '2d20', modifiers: [{ value: character.initiative, description: 'Modificador de Defesa Física' }]})} />
        </div>
        <div>
          <CommonResource label="Defesa Mágica" current={character.magic_defense} onChange={e => rollDice({ formula: '2d20', modifiers: [{ value: character.magic_defense, description: 'Modificador de Defesa Mágica' }]})} />
        </div>
        <div>
          <CommonResource label="Iniciativa" current={character.initiative} onChange={e => rollDice({ formula: '1d20', modifiers: [{ value: character.initiative, description: 'Modificador de Iniciativa' }]})} />
        </div>
        <div>
          <CommonResource label="Movimento" current={character.movement} rollAction={false} />
        </div>
      </div>
    </CharacterViewLayout>
  )
}
