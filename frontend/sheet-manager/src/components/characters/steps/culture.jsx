import Container from '@/src/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/src/components/title'
import Button from '@/src/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useCultures from '@/src/apiHooks/useCultures'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Culture ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)

  const { data: cultures } = useCultures()

  const [selectedCulture, setSelectedCulture] = useState(null)

  if (!cultures) return null

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
          Escolha sua Cultura
        </Title>

        <div className='grid grid-cols-2 gap-4 mt-10'>
          {cultures.map(culture => (
            <SectionCard
              key={culture.permalink}
              item={culture}
              folder={'cultures'}
              selectedItem={selectedCulture?.permalink}
              setSelectedItem={setSelectedCulture}
              onSelect={item => {
                setSelectedSubView('Details')
                setCharacter({
                  ...character,
                  details: {
                    type: 'culture',
                    data: item,
                  }
                })
              }}
            />
          ))}
        </div>

        <Button
          onClick={e => {
            console.log(character.details)
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
