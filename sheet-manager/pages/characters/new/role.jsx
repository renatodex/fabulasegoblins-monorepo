import Container from "../../components/container"
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '../../components/title'
import Button from '../../components/button'
import { ScreenSlideContext } from '../../../src/contexts/screen_slide_context'
import RoleCard from '../../../src/components/characters/role_card'

export default function Role () {
  const { subViewX, setSubViewX, setParentViewX } = useContext(ScreenSlideContext)

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
        x: subViewX
      }}
    >
      <Container>
        <Title>
          Escolha seu Papel de Jogo
        </Title>

        <div className='grid grid-cols-2 gap-4 mt-10'>
          {roles.map(role => (
            <RoleCard
              key={role.permalink}
              role={role}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />
          ))}
        </div>

        <div className="mt-7">
          <Button onClick={e => {
            setParentViewX(0)
            setSubViewX("100%")
          }}>
            Próximo
          </Button>
        </div>
      </Container>
    </motion.div>
  )
}
