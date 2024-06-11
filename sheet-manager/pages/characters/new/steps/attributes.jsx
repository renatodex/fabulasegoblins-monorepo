import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'

export default function Attributes({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)
  const [selectedModifier, setSelectedModifier] = useState(null)

  const handleDragStart = (e, modifier) => {
    setSelectedModifier(modifier)
  }

  const handleDrop = (e, attribute) => {
    e.preventDefault()
    if (selectedModifier !== null) {
      setCharacter(prev => ({
        ...prev,
        [attribute]: (prev[attribute] || 0) + selectedModifier
      }))
      setSelectedModifier(null)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const modifiers = [
    { id: 1, value: +2 },
    { id: 2, value: +1 },
    { id: 3, value: +1 },
    { id: 4, value: +1 },
    { id: 5, value: -1 },
    { id: 6, value: -1 }
  ]

  const attributes = [
    'Força', 'Agilidade', 'Resiliência', 'Intelecto', 'Espírito', 'Elo Mágico', 'Influência', 'Sobrevivência', 'Destino'
  ]

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
    >
      <Container>
        <Title>
          Distribua seus Atributos
        </Title>

        <div className='flex gap-3 mt-7'>
          {modifiers.map(modifier => (
            <div
              key={modifier.id}
              className='border-green-300 font-bold border text-center rounded-full w-12 h-12 leading-[3rem]'
              draggable
              onDragStart={(e) => handleDragStart(e, modifier.value)}
            >
              {modifier.value}
            </div>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-4 mt-10'>
          {attributes.map(attribute => (
            <div key={attribute}>
              {attribute}
              <div
                className='w-34 h-20 rounded border border-green-300 mt-2 leading-[4.8rem] text-center text-5xl'
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, attribute)}
              >
                {character[attribute] || 0}
              </div>
            </div>
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
