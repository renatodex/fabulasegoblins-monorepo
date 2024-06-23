import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useCharacterRoles from '@/src/apiHooks/useCharacterRoles'

export default function Role ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)

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
              selectedItem={selectedRole?.permalink}
              setSelectedItem={setSelectedRole}
            />
          ))}
        </div>

        <div className="mt-7">
          <Button onClick={e => {
            setSubViewVisibility(false)
            setParentViewVisibility(true)
            setCharacter({
              ...character,
              role: selectedRole,
            })
          }}>
            Próximo
          </Button>
        </div>
      </Container>
    </motion.div>
  )
}
