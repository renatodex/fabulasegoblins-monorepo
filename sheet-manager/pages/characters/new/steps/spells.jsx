import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useStarterWeapons from '@/src/apiHooks/useStarterWeapons'
import { FaRegPlusSquare } from "react-icons/fa/index.js";
import * as Icons from 'react-icons/gi/index.js'
import classNames from 'classnames'

export function WeaponList ({ selectedWeapon, setSelectedWeapon, weapons, weaponIcon='⭐' }) {
  return (
    <div>
      {weapons.map((weapon, index) => {

        const WeaponIcon = weapon.icon ? Icons[weapon.icon] : null
        const AttributeIcon = Icons[weapon.sheet_attribute_icon]

        return (
          <div
            key={weapon.title}
            className={classNames('border border-green-300 first:rounded-t last:rounded-b border-b-0 last:border-b', {
            })}
            onClick={e => setSelectedWeapon(weapon)}
          >
            <div className={classNames('p-1 rounded-t bg-green-700', {
              'bg-purple-500': selectedWeapon?.id == weapon?.id
            })}>
              {weaponIcon} {weapon.title}
            </div>

            <div className={classNames('flex p-4', {
              'bg-purple-900': selectedWeapon?.id == weapon?.id
            })}>
              <div>
                <span className={classNames('text-4xl bg-black rounded-full inline-block p-3', {
                  'bg-purple-600': selectedWeapon?.id == weapon?.id
                })}>{WeaponIcon && <WeaponIcon />}</span>
              </div>
              <div className='ml-2'>
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
          </div>
        )
      })}
    </div>
  )
}

export function WeaponDrawer ({ opened = false, title, description, selectedWeapon, setSelectedWeapon, weapons, weaponIcon }) {
  const [isOpen, setIsOpen] = useState(opened)

  return (
    <div>
      <h3 className='text-xl font-serif'>
        {title} ({weapons.length})
        <button
          className='bg-green-700 p-1 rounded align-middle ml-2 inline-block'
          onClick={e => setIsOpen(!isOpen)}
        >
          <FaRegPlusSquare />
        </button>
      </h3>
      <i className='text-green-200'>{description}</i>
      <div className={classNames('mt-4', {
        'hidden': !isOpen
      })}>
        <WeaponList weapons={weapons} selectedWeapon={selectedWeapon} setSelectedWeapon={setSelectedWeapon} weaponIcon={weaponIcon} />
      </div>
    </div>
  )
}

export default function Spells ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)
  const [selectedWeapon, setSelectedWeapon] = useState(null)

  let spells = []
  // const { data: spells } = useSpells()

  const filteredWeaponsArray = (character?.role?.proficiencies || []).map(proficiency => {
    const {data: filteredWeapons} = useStarterWeapons(proficiency.attribute_title)
    return filteredWeapons
  }).filter(value => value !== undefined && value !== null)

  if (!spells) return (<>Loading all spells...</>)

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
          Escolha seus poderes
        </Title>

        <div className='gap-4 mt-10'>
          <div className='mt-4'>
            {character?.grimo?.title ? (
              <WeaponDrawer
                opened
                title="Poderes do Grimo ⭐"
                weapons={character.grimo.spells}
                selectedWeapon={selectedWeapon}
                description={'Exclusivas da academia do seu Grimo.'}
                setSelectedWeapon={setSelectedWeapon}
                weaponIcon={'🌟'}
              />
            ) : (
              <div className='border border-amber-300 p-4 bg-red-800 rounded'>
                <h3 className='text-xl font-serif'>
                  Poderes do Grimo 🌟
                </h3>
                <i className='text-yellow-100'>Você ainda não tem magias de Grimo pois não selecionou um Grimo.</i>
              </div>
            )}
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
