import Container from '@/src/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/src/components/title'
import Button from '@/src/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useGrimos from '@/src/apiHooks/useGrimos'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Grimo ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)

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
              onSelect={item => {
                setSelectedSubView('Details')
                setCharacter({
                  ...character,
                  details: {
                    type: 'grimo',
                    data: item,
                  }
                })
              }}
            />
          ))}
        </div>

        <Button
            onClick={e => {
              setCharacter({
                ...character,
              })
              setParentViewVisibility(true)
              setSubViewVisibility(false)
            }}
            className='flex items-center justify-center'
          >
            <FaArrowLeftLong className='inline-block'/> <span>Voltar</span>
          </Button>
      </Container>
    </motion.div>
  )
}
