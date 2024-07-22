import Container from '@/src/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/src/components/title'
import Button from '@/src/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useStarterWeapons from '@/src/apiHooks/useStarterWeapons'
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import * as Icons from 'react-icons/gi'
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
          className={classNames('p-1 rounded align-middle ml-2 inline-block', {
            'bg-green-700': !isOpen,
            'bg-red-700': isOpen
          })}
          onClick={e => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
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

export default function StarterWeapon ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)
  const [selectedWeapon, setSelectedWeapon] = useState(null)

  const { data: weapons } = useStarterWeapons()

  const filteredWeaponsArray = (character?.role?.proficiencies || []).map(proficiency => {
    const {data: filteredWeapons} = useStarterWeapons(proficiency.attribute_title)
    return filteredWeapons
  }).filter(value => value !== undefined && value !== null)

  if (!weapons) return (<>Loading all weapons...</>)
  if (!filteredWeaponsArray) return (<>Loading filtered weapons...</>)

  const idsToExclude = new Set(filteredWeaponsArray.flat().map(obj => obj.id));
  const nonProficientWeapons = weapons.filter(obj => !idsToExclude.has(obj.id));

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
          <div className='mt-4'>
            {character?.grimo?.starter_weapons ? (
              <WeaponDrawer
                opened
                title="Armas Recomendadas ⭐"
                weapons={character.grimo.starter_weapons}
                selectedWeapon={selectedWeapon}
                description={'Exclusivas da academia do seu Grimo e usá-las não gera penalidades.'}
                setSelectedWeapon={setSelectedWeapon}
                weaponIcon={'⭐'}
              />
            ) : (
              <div className='border border-amber-300 p-4 bg-red-800 rounded'>
                <h3 className='text-xl font-serif'>
                  Armas Recomendadas ⭐
                </h3>
                <i className='text-yellow-100'>Você ainda não tem armas recomendadas pois não selecionou um Grimo.</i>
              </div>
            )}
          </div>
          <div className='mt-4'>
            {filteredWeaponsArray.flat().length > 0 ? (
              <WeaponDrawer
                title="Armas com Aptidão 👍"
                weapons={filteredWeaponsArray.flat()}
                selectedWeapon={selectedWeapon}
                description={'Você sabe usá-las sem grandes problemas e sem ter penalidades.'}
                setSelectedWeapon={setSelectedWeapon}
                weaponIcon={'👍'}
              />
            ) : (
              <div className='border border-amber-300 p-4 bg-amber-800 rounded'>
                <h3 className='text-xl font-serif'>
                  Armas com Aptidão 👍
                </h3>
                <i className='text-yellow-100'>Você ainda não tem armas com aptidão pois não selecionou um Papel de Jogo.</i>
              </div>
            )}
          </div>

          <div className='mt-4'>
            <WeaponDrawer
              opened={!character?.grimo?.starter_weapons && filteredWeaponsArray.flat().length == 0}
              title="Armas sem Aptidão 😢"
              weapons={nonProficientWeapons}
              description={'Você é meio desengonçado com essas armas e terá desvantagem nos primeiros combates.'}
              selectedWeapon={selectedWeapon}
              setSelectedWeapon={setSelectedWeapon}
              weaponIcon={'😢'}
            />
          </div>

        </div>

        <div className="mt-7 flex gap-4">
          <div>
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
          </div>
          <div className='flex-1'>
            <Button
              disabled={!selectedWeapon}
              onClick={e => {
                setSubViewVisibility(false)
                setParentViewVisibility(true)
                setCharacter({
                  ...character,
                  weapon: {
                    ...selectedWeapon,
                    color: '#9FCAD3',
                    permalink: 'starter_weapon',
                  },
                })
              }}
            >
              {selectedWeapon ? `Selecionar ${selectedWeapon?.title}` : 'Selecione a arma'}
            </Button>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}
