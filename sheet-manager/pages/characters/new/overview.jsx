import Container from "../../components/container"
import { motion } from "framer-motion"
import { ScreenSlideContext } from '../../../src/contexts/screen_slide_context'
import { useContext } from 'react'

export default function Overview () {
  const { parentViewX, setSubViewX, setParentViewX } = useContext(ScreenSlideContext)

  return (
    <motion.div
      className="absolute w-full"
      initial={{
        x: 0
      }}
      animate={{
        x: parentViewX
      }}
    >
      <Container>
        <div className="mt-10 border border-solid border-white p-4" onClick={e => {
          setParentViewX("-100%")
          setSubViewX(0)
        }}>
          Papel de Jogo
        </div>
        <div className="mt-10 border border-solid border-white p-4">
          Especies
        </div>
      </Container>
    </motion.div>
  )
}
