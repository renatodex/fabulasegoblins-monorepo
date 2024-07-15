import Container from "@/pages/components/container"
import { motion } from "framer-motion"
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import { useContext } from 'react'
import Button from "@/pages/components/button"
import useCharacterRoles from "@/src/apiHooks/useCharacterRoles"
import useCultures from "@/src/apiHooks/useCultures"
import useSpecies from "@/src/apiHooks/useSpecies"
import useGrimos from "@/src/apiHooks/useGrimos"
import * as Icons from 'react-icons/gi'

export function CharacterSection ({
  label,
  subView,
  item,
  filledValue = function () { return '' },
  filledCheck = function () { return false },
  onSectionClick
}) {
  let bg = null;

  if (item?.permalink && item?.permalink != 'default') {
    bg = { backgroundImage: `url('/${subView.toLowerCase()}/${item?.permalink}.jpg')` }
  }

  return (
    <div
      className="mt-5 rounded-3xl bg-white hover:bg-green-200 cursor-pointer text-black p-1 h-auto bg-cover bg-center"
      style={bg}
      onClick={e => {
        onSectionClick(subView)
      }}
    >
      {filledCheck(item) ? (
        <span className="bg-[rgba(128,241,113,0.9)] text-black border border-green-900 p-2 rounded-xl shadow-xl block w-full leading-[22px] mt-[18px] mb-[18px] text-nowrap overflow-x-auto overflow-y-hidden">
          ✅ {label.split(' ')[1]}: {filledValue(item)}
        </span>
      ) : (
        <div className="border border-dashed border-black rounded-3xl p-3">
          <div className="px-2 flex">
            <div className="flex items-center justify-center font-dolly-bold w-20 h-20 text-center rounded-full bg-slate-900 text-white p-3 text-5xl align-middle text-bold">
              ?
            </div>
            <div className="flex-1 ml-4">
              <p className="m-0 p-0 font-dolly-bold text-2xl">{label.split(' ')[1]}</p>
              <p className="m-0 p-0">Não definido</p>
              <div className="m-0 p-0">
                <button className="bg-black rounded-2xl text-white px-3 py-0.5 text-sm border-0">escolher</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Overview ({ character, setCharacter = function () {} }) {
  const { setSubViewVisibility, setParentViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)

  const validateChoices = function () {
    const validAttributes = [
      character?.attributes?.base_strength,
      character?.attributes?.base_agility,
      character?.attributes?.base_resilience,
      character?.attributes?.base_intelect,
      character?.attributes?.base_spirit,
      character?.attributes?.base_magic_elo,
      character?.attributes?.base_influence,
      character?.attributes?.base_survival,
      character?.attributes?.base_destiny,
    ].every(attr =>
      typeof attr === 'number' && (attr >= -1 && attr <= 2)
    )

    return (
      character?.role?.title &&
      character?.specie?.title &&
      character?.culture?.title &&
      character?.grimo?.title &&
      validAttributes &&
      character?.weapon?.title &&
      character?.spells?.length > 0 && character?.ultimate?.length > 0
    )
  }

  const onSectionClick = function (subView) {
    setParentViewVisibility(false)
    setSubViewVisibility(true)
    setSelectedSubView(subView)
  }

  // const { data: cultures } = useCultures()
  // const { data: roles } = useCharacterRoles()
  // const { data: species } = useSpecies()
  // const { data: grimos } = useGrimos()

  // if (cultures && roles && species && grimos) {
  //   if (!character?.culture?.id && !character?.role?.id && !character?.specie?.id && !character?.grimo?.id) {
  //     setCharacter({
  //       ...character,
  //       culture: cultures[0],
  //       role: roles[0],
  //       specie: species[0],
  //       grimo: grimos[0],
  //       attributes: {
  //         'base_strength': 0,
  //         'base_agility': 2,
  //         'base_resilience': 1,
  //         'base_intelect': 1,
  //         'base_spirit': -1,
  //         'base_magic_elo': 1,
  //         'base_influence': 0,
  //         'base_survival': 0,
  //         'base_destiny': 0,
  //       }
  //     })
  //   }
  // }

  let WeaponIcon

  if (character?.weapon?.icon) {
    WeaponIcon = Icons[character.weapon.icon]
  }

  console.log(character)

  return (
    <motion.div
      className="w-full"
      initial={{
        x: 0
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "-100%"
      }}
    >
      <Container>
        <div className="text-center mt-3 font-bold text-2xl">
          Criando seu Personagem
        </div>

        <CharacterSection
          label={'a Espécie'}
          subView={'Species'}
          item={character?.specie}
          filledCheck={item => item?.title}
          filledValue={item => item?.title}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'o Papel de Jogo'}
          subView={'Roles'}
          item={character?.role}
          filledCheck={item => item?.title}
          filledValue={item => item?.title}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'a Cultura'}
          subView={'Cultures'}
          item={character?.culture}
          filledCheck={item => item?.title}
          filledValue={item => item?.title}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'o Grimo'}
          subView={'Grimos'}
          item={character?.grimo}
          filledCheck={item => item?.title}
          filledValue={item => item?.title}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'os Atributos'}
          subView={'Attributes'}
          item={character?.attributes}
          filledCheck={attributes =>
            [
              attributes?.base_strength,
              attributes?.base_agility,
              attributes?.base_resilience,
              attributes?.base_intelect,
              attributes?.base_spirit,
              attributes?.base_magic_elo,
              attributes?.base_influence,
              attributes?.base_survival,
              attributes?.base_destiny,
            ].every(attr =>
              typeof attr === 'number' && (attr >= -1 && attr <= 2)
            )
          }
          filledValue={attributes => `Clique para redefinir`}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'a Arma Inicial'}
          subView={'StarterWeapon'}
          item={character}
          filledCheck={item => item?.weapon}
          filledValue={item => (
            <div className="inline-block">
              <span className="inline-block align-middle text-xl text-black bg-green-600 rounded p-1"><WeaponIcon/></span>
              <span className="ml-2">{item?.weapon.title}</span>
            </div>
          )}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'os Poderes'}
          subView={'Spells'}
          item={character}
          filledCheck={item => item?.spells?.length > 0 && item?.ultimate?.length > 0}
          filledValue={item => (
            <div className="block">
              {item?.spells.map(spell => (
                <div>✔ {spell.title}</div>
              ))}
              {item?.ultimate.map(spell => (
                <div>✔ {spell.title}</div>
              ))}
            </div>
          )}
          onSectionClick={onSectionClick}
        />

        <div className="mt-7">
          {validateChoices() ? (
            <Button onClick={e => {}}>Criar personagem</Button>
          ) : (
            <Button disabled>Criar personagem</Button>
          )}
        </div>
      </Container>
    </motion.div>
  )
}
