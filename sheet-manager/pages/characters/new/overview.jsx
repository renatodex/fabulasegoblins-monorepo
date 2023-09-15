import Container from "@/pages/components/container"
import { motion } from "framer-motion"
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import { useContext } from 'react'

export function CharacterSection ({ label, subView, item, onSectionClick }) {
  return (
    <div
      className="mt-10 rounded bg-gray-600 border border-solid border-white p-4 bg-cover bg-center"
      style={{ backgroundImage: `url('/${subView.toLowerCase()}/${item?.permalink}.jpg')`}}
      onClick={e => {
        onSectionClick(subView)
      }}
    >
      {item ? (
          <span>
            {label}: {item?.name}
          </span>
        ) : (
          <span>
            {label}: Não selecionado
          </span>
        )}
    </div>
  )
}

export default function Overview ({ character, setCharacter = function () {} }) {
  const { setSubViewVisibility, setParentViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)

  const onSectionClick = function (subView) {
    setParentViewVisibility(false)
    setSubViewVisibility(true)
    setSelectedSubView(subView)
  }

  return (
    <motion.div
      className="absolute w-full"
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
        <CharacterSection
          label={'Espécie'}
          subView={'Species'}
          item={character?.specie}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'Papel de Jogo'}
          subView={'Roles'}
          item={character?.role}
          onSectionClick={onSectionClick}
        />

        <CharacterSection
          label={'Cultura'}
          subView={'Cultures'}
          item={character?.culture}
          onSectionClick={onSectionClick}
        />

      </Container>
    </motion.div>
  )
}
