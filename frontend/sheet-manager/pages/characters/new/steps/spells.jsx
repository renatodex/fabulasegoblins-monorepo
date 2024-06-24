import Container from '@/pages/components/container'
import { motion } from "framer-motion"
import { useState, useEffect, useContext } from 'react'
import { Title } from '@/pages/components/title'
import Button from '@/pages/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import SectionCard from '@/src/components/characters/section_card'
import useStarterWeapons from '@/src/apiHooks/useStarterWeapons'
import useSpells from '@/src/apiHooks/useSpells'
import { FaRegPlusSquare } from "react-icons/fa/index.js";
import * as Icons from 'react-icons/gi/index.js'
import classNames from 'classnames'
import Spell from '@fabulasegoblins/ui/spell'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export function ObjectList ({ selectedObject, setSelectedObject, objects, icon='⭐' }) {
  return (
    <div>
      {objects.map((object, index) => {

        console.log('icon', object.icon)
        const ObjectIcon = object.icon ? Icons[object.icon] : null

        return (
          <div
            key={object.title}
            className={classNames('border border-green-300 first:rounded-t last:rounded-b border-b-0 last:border-b', {
            })}
            onClick={e => setSelectedObject(object)}
          >
            <div className={classNames('rounded-t bg-green-700 p-4', {
              'bg-purple-500': selectedObject?.id == object?.id
            })}>
              <span className='inline-block text-2xl bg-black rounded-full p-2 align-middle mr-2'>
                {ObjectIcon && <ObjectIcon />}
              </span> {object.title}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function ObjectDrawer ({
  opened = false,
  title,
  description,
  selectedObject,
  setSelectedObject,
  objects,
  icon
}) {
  const [isOpen, setIsOpen] = useState(opened)

  return (
    <div>
      <h3 className='text-xl font-serif'>
        {title} ({objects.length})
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
        <ObjectList
          objects={objects}
          selectedObject={selectedObject}
          setSelectedObject={setSelectedObject}
          icon={icon}
        />
      </div>
    </div>
  )
}

export default function Spells ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)
  const [selectedObject, setSelectedObject] = useState(null)

  // let spells = []
  const { data: spells } = useSpells()

  useEffect(() => {
    if(selectedObject) {
      console.log("Add class")
      document.body.classList.add('no-scroll');
    }

    if (!selectedObject) {
      console.log("Remove class")
      document.body.classList.remove('no-scroll');
    }
  }, [selectedObject])

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

        <Modal
          isOpen={selectedObject}
          onAfterOpen={e => {}}
          onRequestClose={e => { setSelectedObject(null) }}
          contentLabel="Spell Info"
          className="Modal"
          overlayClassName="Overlay"
        >
          <button onClick={e => setSelectedObject(null)} className='bg-green-600 rounded-full p-2'>
            ✖
          </button>
          <div className='h-full overflow-y-auto rounded-xl'>
            {selectedObject && <Spell spell={selectedObject} />}
          </div>
        </Modal>

        <div className='gap-4 mt-10'>
          <div className='mt-4'>
            {character?.grimo?.title ? (
              <ObjectDrawer
                opened
                title="Poderes do Grimo ⭐"
                objects={spells}
                selectedObject={selectedObject}
                description={'Exclusivas da academia do seu Grimo.'}
                setSelectedObject={setSelectedObject}
                icon={'🌟'}
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

          <div className='mt-4'>
            <ObjectDrawer
              opened
              title="Poderes do Papel de Jogo 📓"
              objects={character.role.spells}
              selectedObject={selectedObject}
              description={'Exclusivas do seu Papel de Jogo.'}
              setSelectedObject={setSelectedObject}
              icon={'🌟'}
            />
          </div>

          <div className='mt-4'>
            <ObjectDrawer
              opened
              title="Poderes da Cultura 📓"
              objects={character.culture.spells}
              selectedObject={selectedObject}
              description={'Exclusivas da sua Cultura.'}
              setSelectedObject={setSelectedObject}
              icon={'🌟'}
            />
          </div>

          <div className='mt-4'>
            <ObjectDrawer
              opened
              title="Poderes da Espécie 📓"
              objects={character.specie.spells}
              selectedObject={selectedObject}
              description={'Exclusivas da sua espécie.'}
              setSelectedObject={setSelectedObject}
              icon={'🌟'}
            />
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
