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

export function ChangeResourceModal() {
  return (
    <AppModalContent title={"Mudando HP"}>
Lorem ipsusdfm dolor sit amet, consectetur adipiscing elit. Sed eleifend, metus et maximus sagittis, dui turpis lacinia nisi, quis venenatis turpis nisi eget nulla. Vivamus et odio eget tellus lacinia laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit ac lectus gravida auctor. Morbi tincidunt, libero vitae mollis faucibus, odio magna imperdiet urna, vel facilisis nisl mauris vitae ex. Duis orci odio, laoreet porttitor purus nec, elementum lobortis orci. Phasellus efficitur, sapien vel mollis viverra, elit purus consequat augue, vel lobortis ex mi non augue. Ut ut mollis erat. Nullam dictum sit amet turpis bibendum malesuada. Maecenas ac iaculis nunc.

In at quam vitae purus maximus imperdiet. Curabitur velit enim, laoreet vitae semper non, commodo nec felis. Maecenas at massa molestie, laoreet leo non, venenatis turpis. Pellentesque tortor risus, convallis vel finibus vel, blandit et eros. Aliquam massa magna, tempus non ornare a, finibus sed mi. Aenean fringilla maximus magna. Vivamus tempus, est sed tristique pretium, leo massa pulvinar augue, vitae accumsan elit ligula id neque. Nullam iaculis mauris nunc. Suspendisse potenti. Nulla in metus quis ligula posuere molestie eu ut arcu.

{/* Proin euismod condimentum eros. Donec ligula massa, malesuada a orci non, elementum pellentesque ligula. Pellentesque sit amet tristique lacus. Nam mauris quam, convallis sed lectus at, elementum pretium ligula. Sed vehicula eros non orci luctus euismod. Fusce tristique faucibus libero, sed maximus mi mattis et. Donec commodo justo a quam iaculis, non semper dui hendrerit. Donec ac vestibulum lacus. Aliquam ultrices, augue eu eleifend euismod, orci orci varius enim, id lobortis quam enim eu purus. Donec sit amet purus risus. Duis placerat arcu neque, interdum suscipit elit suscipit in. Aliquam malesuada tortor neque, eu ultrices nibh accumsan sed. Praesent dictum porttitor neque quis vestibulum. Nulla augue dolor, blandit a dignissim vitae, facilisis maximus eros.

Praesent elementum velit quis massa pharetra egestas. Maecenas sed tristique risus. Nam at odio ac sapien ullamcorper aliquam id ac libero. Fusce eu sollicitudin eros. Donec facilisis eros vitae sagittis gravida. Praesent quis nibh sapien. Donec non vehicula nibh. Etiam fringilla vitae lorem at mattis. Vivamus aliquam ultrices nunc, ac malesuada ante varius et. Nunc non lorem arcu. Ut blandit pretium metus, sit amet scelerisque nisl faucibus non. Nunc luctus sapien vitae augue mollis commodo. Integer mollis arcu eget pellentesque lobortis.

Praesent molestie tempus scelerisque. Vivamus blandit metus et velit suscipit pharetra. Ut at porttitor ligula, id venenatis nunc. Donec justo erat, blandit efficitur augue nec, lacinia aliquet nibh. Quisque a viverra purus. Aliquam erat volutpat. Etiam nulla massa, pellentesque eget ex id, condimentum bibendum velit. Curabitur quis tellus pretium, ullamcorper purus nec, imperdiet diam. Donec ac consequat augue, in porta sapien. Nullam sed sem justo. Aenean sodales magna lacus. Duis sit amet diam id leo convallis luctus egestas ut metus. Etiam ante metus, tempus id lacus sed, bibendum congue nulla. Ut rutrum interdum quam, vitae feugiat risus commodo vel. Sed consequat velit quis metus ornare, at feugiat magna varius.

Sed efficitur, eros eu bibendum cursus, nibh nisi convallis augue, sed lacinia lectus elit sollicitudin purus. Praesent sit amet commodo mauris, sit amet ullamcorper massa. Nulla eget mauris nec arcu faucibus mattis vitae at ligula. In cursus ornare purus. In eros diam, bibendum vitae est non, mollis accumsan nisi. Praesent nunc risus, ullamcorper a sem non, dapibus dictum sem. Praesent et orci a urna blandit fringilla eget sed tortor. Phasellus feugiat ex id porta bibendum. Fusce vel rhoncus tortor. Cras in massa non neque semper euismod eget nec nibh. Quisque hendrerit consequat dui, id hendrerit nisi sodales ullamcorper. Vivamus quis urna libero. In non nibh eros. Proin velit dolor, sodales a vestibulum eget, facilisis in justo.

Aliquam venenatis velit sit amet quam sollicitudin luctus. Morbi erat ante, sagittis vel massa ultrices, maximus iaculis nunc. Nam ut dolor enim. Quisque at viverra metus, a tincidunt lorem. In porta consectetur enim ac condimentum. Donec sit amet lectus eget augue rutrum placerat. Proin consequat fringilla felis, at molestie ante sollicitudin non.

Duis fringilla ex sit amet turpis maximus, non dignissim arcu rhoncus. Pellentesque facilisis ut est eu aliquam. Duis in justo rutrum, luctus nulla non, auctor metus. In in pulvinar libero. Nulla tincidunt turpis tortor, et placerat odio rhoncus non. Donec luctus velit ut magna aliquet aliquet. Etiam vel pretium magna. Praesent tellus tellus, mattis sit amet molestie pulvinar, sollicitudin at nisl.

Etiam ullamcorper sem purus, non bibendum nisi euismod nec. Sed sit amet pulvinar tellus. Morbi semper, sem nec tincidunt eleifend, justo ante venenatis enim, non hendrerit dui arcu id turpis. Aenean elit nisi, accumsan ac nibh tincidunt, posuere consectetur magna. Nam egestas convallis nibh vel condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus orci odio, venenatis ultrices feugiat eu, vestibulum id ligula. Quisque rutrum tristique ipsum, sed cursus purus efficitur at. Maecenas varius metus nec magna pulvinar, sit amet aliquam libero efficitur. In elit dui, pharetra vitae mi fermentum, varius consequat neque.

Morbi interdum orci sed posuere viverra. Integer et risus eu lorem gravida elementum. Suspendisse a magna ex. In hac habitasse platea dictumst. Suspendisse ultricies mollis mi eget fermentum. Nulla volutpat ornare est, pellentesque scelerisque nulla egestas sit amet. Morbi mollis quam bibendum, feugiat elit nec, vestibulum enim. Praesent consectetur lobortis odio sit amet mattis. Mauris ac purus purus. Nam tempor vel velit ultricies rutrum. Cras vel libero cursus, vulputate libero at, rutrum magna. Suspendisse potenti. Donec sed metus et velit mollis euismod. Integer ultrices metus erat, vel suscipit sem faucibus quis. Nunc ex est, eleifend vitae leo a, hendrerit laoreet enim. Nunc iaculis hendrerit hendrerit.

Curabitur volutpat accumsan quam, ut dignissim purus tincidunt quis. Quisque molestie vitae nulla vitae dignissim. Integer ac viverra nisl. Fusce mauris nunc, viverra vitae elit non, gravida efficitur felis. Quisque eu aliquet sapien, in ullamcorper massa. Phasellus nec nulla in elit pretium rutrum dignissim et lacus. Proin scelerisque sodales aliquam. Duis ac enim nec enim vehicula cursus. Donec vestibulum vulputate pellentesque.

Nullam ante felis, luctus a nibh id, egestas pellentesque dui. In vel risus enim. Morbi fringilla justo nec nulla luctus rhoncus. Pellentesque sagittis mauris a ante cursus luctus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam scelerisque placerat rhoncus. Nunc varius hendrerit justo, quis tempor nibh iaculis nec. Nulla eu varius dui. Mauris ac nunc pretium, tincidunt risus eu, posuere nulla. Pellentesque tincidunt, ante quis sollicitudin ultricies, dolor odio congue tellus, eu commodo nisl nisi nec lacus. Duis non sapien quis urna sollicitudin tincidunt. Ut ut semper magna. In hac habitasse platea dictumst. */}


    </AppModalContent>
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

  const { setModalContent, AppModalContent } = useContext(AppModalContext)

  const { isNavOpened, CharacterViewLayout, ToggleButton } = useCharacterViewLayout()

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
              console.log(1)
              setModalContent(ChangeResourceModal)
            }}
          />
        </div>
        <div>
          <MinMaxResource
            label="Pontos de Magia"
            current={character.mp_points}
            max={character.max_mp_points}
            onChange={e => {}}
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
