import Container from '@/src/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/src/components/title'
import Button from '@/src/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useCharacterRoles from '@/src/apiHooks/useCharacterRoles'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Role ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)

  const { data: roles } = useCharacterRoles()

  const [selectedRole, setSelectedRole] = useState(null)

  if (!roles) return null

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
          Escolha seu Papel de Jogo
        </Title>

        <div className='grid grid-cols-2 gap-4 mt-10'>
          {roles.map(role => (
            <SectionCard
              key={role.permalink}
              item={role}
              folder={'roles'}
              iconAlignment={'left'}
              selectedItem={selectedRole?.permalink}
              setSelectedItem={setSelectedRole}
              onSelect={item => {
                setSelectedSubView('Details')
                setCharacter({
                  ...character,
                  details: {
                    type: 'role',
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
