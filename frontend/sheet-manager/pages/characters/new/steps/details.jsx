import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { LuChevronUpCircle, LuChevronDownCircle } from "react-icons/lu";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import Spell from '@fabulasegoblins/ui/spell'
import { capitalizeFirstLetter } from '@/src/utils'
import Spells from './spells'
import useGrimoSpells from '@/src/apiHooks/useGrimoSpells'
import classNames from 'classnames'

export function SpellGroup ({ label, spells, collapseSpells, collapseBlock }) {
  const [isCollapsed, setIsCollapsed] = useState(collapseBlock)

  return (
    <div>
      <h2
        className={classNames('text-xl font-dolly-bold flex mt-4 border-b-white', {
          'border-b': isCollapsed
        })}
        onPointerUp={e => setIsCollapsed(!isCollapsed)}
      >
        <span className='flex-1'>
          {label}
        </span>
        <span>
          {isCollapsed ? <LuChevronDownCircle /> : <LuChevronUpCircle />}
        </span>
      </h2>
      {!isCollapsed && (
        <div className='grid grid-cols-1 gap-2 border-white p-3 border rounded-xl'>
          {(spells || []).map(spell => (
            <div>
              <Spell defaultCollapse={collapseSpells} spell={spell} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Details ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility, setSelectedSubView } = useContext(ScreenSlideContext)

  let spellGroups = null
  if (!character?.details?.data?.spells) {
    const { spellGroups:spellGroupsData } = useGrimoSpells('brasao-de-giurad')
    spellGroups = spellGroupsData
  }

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
          {character?.details?.data?.title}
        </Title>

        <div className='gap-4 mt-10'>
          <div className='rounded-xl' style={{ backgroundColor: character?.details?.data?.color}}>
            <img
              width={'100%'}
              className='rounded-xl'
              src={`/${character?.details?.type}s/full/${character?.details?.data?.permalink}.jpg`}
            />
          </div>
          <div className='mt-4'>
            <p className='font-adobe-kis text-lg'>
              {character?.details?.data?.long_description}
            </p>
          </div>

          <div className='border flex p-3 mt-4 bg-slate-600 rounded-xl'>
            <span className='flex-1 self-center'>
              Saiba mais no site do livro
            </span>
            <LiaExternalLinkSquareAltSolid className='inline text-3xl' />
          </div>

          {character?.details?.data?.spells && (
            <>
              <h2 className='text-xl font-dolly-bold mt-4 border-b border-b-white'>Características:</h2>
              <div className='grid grid-cols-1 gap-3 mt-3'>
                {(character?.details?.data?.spells || []).map(spell => (
                  <div>
                    <Spell defaultCollapse={true} spell={spell} />
                  </div>
                ))}
              </div>
            </>
          )}

          {spellGroups && (
            <>
              {spellGroups.map(spellGroup => (
                <SpellGroup
                  label={`Poderes ${spellGroup.label}`}
                  spells={spellGroup.spells}
                  collapseSpells={true}
                  collapseBlock={true}
                />
              ))}
            </>
          )}
        </div>

        <div className="mt-7 flex gap-3">
          <Button
            onClick={e => {
              console.log(character?.details)
              setCharacter({
                ...character,
              })
              setSelectedSubView(`${capitalizeFirstLetter(character?.details?.type)}s`)
            }}
            className='flex items-center justify-center'
          >
            <FaArrowLeftLong className='inline-block'/> <span>Escolher outro</span>
          </Button>
          <Button onClick={e => {
            setCharacter({
              ...character,
              [character?.details?.type]: character?.details?.data,
            })
            setSubViewVisibility(false)
            setParentViewVisibility(true)
          }}>
            Confirmar
          </Button>
        </div>
      </Container>
    </motion.div>
  )
}
