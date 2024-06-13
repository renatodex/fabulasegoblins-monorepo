import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useStarterWeapons from '@/src/apiHooks/useStarterWeapons'
import * as Icons from 'react-icons/gi'
import classNames from 'classnames'

export default function StarterWeapon ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)
  const [selectedWeapon, setSelectedWeapon] = useState(null)

  const { data: weapons } = useStarterWeapons()

  console.log(character)

  if (!weapons) return (<>Loading...</>)

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
          Escolha sua Arma Inicial
        </Title>

        <div className='gap-4 mt-10'>
          <h3 className='text-2xl font-serif'>Armas com Proficiência</h3>

          <div className='mt-4'>
            {weapons.map((weapon, index) => {

              const WeaponIcon = Icons[weapon.icon]
              const AttributeIcon = Icons[weapon.sheet_attribute_icon]

              return (
                <div
                  key={weapon.title}
                  className={classNames('flex border border-green-300 p-4 first:rounded-t last:rounded-b border-b-0 last:border-b', {
                  })}
                  onClick={e => setSelectedWeapon(weapon)}
                >
                  <div>
                    <span className={classNames('text-4xl bg-black rounded-full inline-block p-3', {
                      'bg-purple-600': selectedWeapon?.id == weapon?.id
                    })}>{WeaponIcon && <WeaponIcon />}</span>
                  </div>
                  <div className='ml-2'>
                    ⭐ {weapon.title}
                    <div>
                      <div className='mt-1'>
                        ⚔ Dano: <code className='bg-slate-600 px-2 rounded italic'>{weapon.formula}</code>
                      </div>
                      <div className='mt-1'>
                        🔎 Tipo de Dano: <span className='italic bg-indigo-700 px-2 rounded'>{weapon.damage_type}</span>
                      </div>
                      <div className='flex align-base mt-1'>
                        <span className='text-sm bg-green-800 p-1 rounded-full'><AttributeIcon /></span>
                        <div className='ml-1'>Atributo: <span className='italic bg-pink-800 px-2 rounded'>{weapon.sheet_attribute}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-7">
          <Button onClick={e => {
            setSubViewVisibility(false)
            setParentViewVisibility(true)
            setCharacter({
              ...character,
            })
          }}>
            Próximo
          </Button>
        </div>
      </Container>
    </motion.div>
  )
}
