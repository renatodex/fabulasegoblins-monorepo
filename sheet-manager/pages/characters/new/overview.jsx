import Container from "../../components/container"
import { AnimatePresence, motion } from "framer-motion"
import { ScreenSlideContext } from '../../../src/contexts/screen_slide_context'
import { useContext } from 'react'

export default function Overview ({ character, setCharacter = function () {} }) {
  const { setSubViewVisibility, setParentViewVisibility } = useContext(ScreenSlideContext)

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
        <div className="mt-10 border border-solid border-white p-4" onClick={e => {
          setParentViewVisibility(false)
          setSubViewVisibility(true)
        }}>
          {character?.role ? (
              <span>
                Papel de Jogo: {character?.role}
              </span>
            ) : (
              <span>
                Papel de Jogo: Não selecionado
              </span>
            )}
        </div>
        <div className="mt-10 border border-solid border-white p-4" onClick={e => {
          setParentViewVisibility(false)
          setSubViewVisibility(true)
        }}>
          Especies
        </div>
      </Container>
    </motion.div>
  )
}
