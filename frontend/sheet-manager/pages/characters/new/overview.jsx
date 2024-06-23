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
  return (
    <div
      className="mt-5 rounded bg-gray-600 border border-solid border-green-300 text-white px-4 h-20 leading-[5em] bg-cover bg-center"
      style={{ backgroundImage: `url('/${subView.toLowerCase()}/${item?.permalink}.jpg')` }}
      onClick={e => {
        onSectionClick(subView)
      }}
    >
      {filledCheck(item) ? (
        <span className="bg-[rgba(128,241,113,0.9)] text-black border border-green-900 p-2 rounded-xl shadow-xl inline-block w-full  leading-[22px] mt-[18px] text-nowrap overflow-x-scroll overflow-y-hidden">
          ✅ {label.split(' ')[1]}: {filledValue(item)}
        </span>
      ) : (
        <span className="px-2">
          🔽 Escolha {label}
        </span>
      )}
    </div>
  )
}

export default function Overview ({ character, setCharacter = function () {} }) {
  const { setSubViewVisibility, setParentViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)

  const validateChoices = function () {
    return (character?.role?.name && character?.specie?.name && character?.culture?.name && character?.grimo?.name)
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
          filledCheck={item => item?.name}
          filledValue={item => item?.name}
          onSectionClick={onSectionClick}
        />

        <div className="mt-7">
          {validateChoices() ? (
            <Button onClick={e => onSectionClick('Attributes')}>Avançar ⏩ Escolha de Atributos</Button>
          ) : (
            <Button onClick={e => onSectionClick('Attributes')}> Avançar ⏩ Escolha de Atributos</Button>
          )}
        </div>
      </Container>
    </motion.div>
  )
}
