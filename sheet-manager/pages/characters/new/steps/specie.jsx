import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'

export default function Specie ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)

  const [species, setSpecies] = useState([
    {
      name: 'Goblins',
      permalink: 'goblins',
    },
    {
      name: 'Armadons',
      permalink: 'armadons',
    },
    {
      name: 'Metalóides',
      permalink: 'metaloides',
    },
    {
      name: 'Valdaris',
      permalink: 'valdaris',
    },
    {
      name: 'Razalans',
      permalink: 'razalans',
    },
    {
      name: 'Luminins',
      permalink: 'luminins',
    },
  ])

  const [selectedSpecie, setSelectedSpecie] = useState(null)

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
            />
          ))}
        </div>

        <div className="mt-7">
          <Button onClick={e => {
            setSubViewVisibility(false)
            setParentViewVisibility(true)
            setCharacter({
              ...character,
              specie: selectedSpecie,
            })
          }}>
            Próximo
          </Button>
        </div>
      </Container>
    </motion.div>
  )
}
