import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useGrimos from '@/src/apiHooks/useGrimos'

export default function Grimo ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)

  const { data: grimos } = useGrimos()

  const [selectedGrimo, setSelectedGrimo] = useState(null)

  if (!grimos) return "Loading..."

  return (
    <motion.div
      initial={{
        x: "100%"
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "100%"
      }}
    >
      <Container>
        <Title>
          Escolha seu Grimo
        </Title>

        <div className='grid grid-cols-2 gap-4 mt-10'>
          {grimos.map(grimo => (
            <SectionCard
              key={grimo.permalink}
              item={grimo}
              folder={'grimos'}
              selectedItem={selectedGrimo?.permalink}
              setSelectedItem={setSelectedGrimo}
            />
          ))}
        </div>

        <div className="mt-7">
          <Button onClick={e => {
            setSubViewVisibility(false)
            setParentViewVisibility(true)
            setCharacter({
              ...character,
              grimo: selectedGrimo,
            })
          }}>
            Próximo
          </Button>
        </div>
      </Container>
    </motion.div>
  )
}
