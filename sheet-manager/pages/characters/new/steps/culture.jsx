import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useCultures from '@/src/apiHooks/useCultures'

export default function Culture ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)

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
            />
          ))}
        </div>

        <div className="mt-7">
          <Button onClick={e => {
            setSubViewVisibility(false)
            setParentViewVisibility(true)
            setCharacter({
              ...character,
              culture: selectedCulture,
            })
          }}>
            Próximo
          </Button>
        </div>
      </Container>
    </motion.div>
  )
}
