import Container from '@/src/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/src/components/title'
import Button from '@/src/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useSpecies from '@/src/apiHooks/useSpecies'
import useScrollTop from '@/src/utilitaryHooks/use_scroll_top'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Specie ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)

  const { data: species } = useSpecies()

  const [selectedSpecie, setSelectedSpecie] = useState(null)

  useScrollTop()

  if (!species) return null

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
          Escolha sua Espécie
        </Title>

        <div className='grid grid-cols-2 gap-4 mt-10'>
          {species.map(specie => (
            <SectionCard
              key={specie.permalink}
              item={specie}
              folder={'species'}
              selectedItem={selectedSpecie?.permalink}
              setSelectedItem={setSelectedSpecie}
              onSelect={item => {
                setSelectedSubView('Details')
                setCharacter({
                  ...character,
                  details: {
                    type: 'specie',
                    data: item,
                  }
                })
                console.log("Salvou até")
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
