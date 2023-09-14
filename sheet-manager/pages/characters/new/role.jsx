import Container from "../../components/container"
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '../../components/title'
import Button from '../../components/button'
import { ScreenSlideContext } from '../../../src/contexts/screen_slide_context'
import SectionCard from '../../../src/components/characters/section_card'

export default function Role ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)

  const [roles, setRoles] = useState([
    {
      name: 'Carregador',
      permalink: 'carrier',
    },
    {
      name: 'Atirador',
      permalink: 'shooter',
    },
    {
      name: 'Conjurador',
      permalink: 'caster',
    },
    {
      name: 'Tanque',
      permalink: 'tank',
    },
    {
      name: 'Suporte',
      permalink: 'support',
    },
    {
      name: 'Utilitário',
      permalink: 'utilitary',
    },
  ])

  const [selectedRole, setSelectedRole] = useState(null)

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
