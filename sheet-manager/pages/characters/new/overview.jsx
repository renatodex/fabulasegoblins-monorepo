import Container from "@/pages/components/container"
import { motion } from "framer-motion"
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import { useContext } from 'react'
import Button from "@/pages/components/button"

export function CharacterSection ({ label, subView, item, onSectionClick }) {
  return (
    <div
      className="mt-5 rounded bg-gray-600 border border-solid border-green-300 text-white px-4 h-20 leading-[5em] bg-cover bg-center"
      style={{ backgroundImage: `url('/${subView.toLowerCase()}/${item?.permalink}.jpg')` }}
      onClick={e => {
        onSectionClick(subView)
      }}
    >
      {item?.name ? (
        <span className="bg-[rgba(128,241,113,0.9)] text-black border border-green-900 p-2 rounded-xl shadow-xl">
          ✅ {label.split(' ')[1]}: {item?.name}
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
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'o Papel de Jogo'}
          subView={'Roles'}
          item={character?.role}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'a Cultura'}
          subView={'Cultures'}
          item={character?.culture}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'o Grimo'}
          subView={'Grimos'}
          item={character?.grimo}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'os Atributos'}
          subView={'Attributes'}
          item={character}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'a Arma Inicial'}
          subView={'StarterWeapon'}
          item={character}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'os Poderes'}
          subView={'Spells'}
          item={character}
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
