import Container from '@/src/components/container'
import { motion } from "framer-motion"
import { useState, useEffect, useContext } from 'react'
import { Title } from '@/src/components/title'
import Button from '@/src/components/button'
import { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import useSpells from '@/src/apiHooks/useSpells'
import { FaRegPlusSquare } from "react-icons/fa";
import * as Icons from 'react-icons/gi'
import { CiSquareRemove } from "react-icons/ci";
import classNames from 'classnames'
import Spell from '@fabulasegoblins/ui/spell'
import Modal from 'react-modal';

Modal.setAppElement("#modal")

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

export function ObjectList ({ selectedObject, onRemove, setSelectedObject, ownedSpells, objects, icon='⭐' }) {
  return (
    <div>
      {objects.map((object, index) => {
        const ObjectIcon = object.icon ? Icons[object.icon] : null

        const isRemovable = ownedSpells.includes(object.permalink) && object.tags.includes("grimo") && objects.length > 1

        return (
          <div
            key={object.title}
            className={classNames('border border-green-300 first:rounded-t last:rounded-b border-b-0 last:border-b', {
            })}
            onClick={e => { e.preventDefault(); setSelectedObject(object) }}
          >
            <div className={classNames('rounded-t p-4', {
              'bg-purple-700': ownedSpells.includes(object.permalink),
              'bg-slate-700': !ownedSpells.includes(object.permalink),
            })}>
              <div className='flex'>
                <span className='text-2xl bg-black rounded-full p-2 align-middle mr-2'>
                  {ObjectIcon && <ObjectIcon />}
                </span>
                <span className='grow align-middle pt-2'>
                  {ownedSpells.includes(object.permalink) && (<span>✔</span>)} {object.title}
                </span>
                {isRemovable && (
                  <button onClick={e => {
                    e.stopPropagation();
                    onRemove(object)
                  }} className='pt-1 text-red-300 text-3xl'>
                    <CiSquareRemove />
                  </button>
                )}
              </div>
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
  ownedSpells,
  setOwnedSpells,
  objects,
  onRemove = function () {},
  icon
}) {
  const [isOpen, setIsOpen] = useState(opened)

  if (!objects) return null;

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
          ownedSpells={ownedSpells}
          setOwnedSpells={setOwnedSpells}
          onRemove={onRemove}
          icon={icon}
        />
      </div>
    </div>
  )
}

export default function Spells ({ character, setCharacter }) {
  const { setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)
  const [selectedObject, setSelectedObject] = useState(null)
  const [ownedSpells, setOwnedSpells] = useState([])
  const [ownedUltimates, setOwnedUltimates] = useState([])

  const { data: spells } = useSpells(`q[filter_tags_eq_any]=${character?.grimo?.permalink}&q[tier_eq]=1`)
  const { data: ultimateSpells } = useSpells(`q[filter_tags_eq_any]=${character?.grimo?.permalink}&q[ultimate_eq]=true`)


  function addUltimate (spell) {
    console.log("Ultimate added")
    setOwnedUltimates(
      [...new Set([...ownedSpells, spell.permalink])].slice(-1)
    )
    setSelectedObject(null)
  }

  function removeUltimate (removedSpell) {
    setOwnedUltimates(
      ownedUltimates.filter(spell => removedSpell.permalink != spell)
    )
  }

  function addSpell (spell) {
    console.log("Spell added")
    setOwnedSpells(
      [...new Set([...ownedSpells, spell.permalink])].slice(-2)
    )
    setSelectedObject(null)
  }

  function removeSpell (removedSpell) {
    setOwnedSpells(
      ownedSpells.filter(spell => removedSpell.permalink != spell)
    )
  }

  useEffect(() => {
    if(selectedObject) {
      document.body.classList.add('no-scroll');
    }

    if (!selectedObject) {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedObject])

  useEffect(() => {
    if (ultimateSpells?.length == 1) {
      addUltimate(ultimateSpells[0])
    }
  }, [ultimateSpells])

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
          Escolha 2 poderes de Grimo
        </Title>

        <Modal
          isOpen={selectedObject ? true : false}
          onAfterOpen={e => {}}
          onRequestClose={e => { setSelectedObject(null) }}
          contentLabel="Spell Info"
          className="Modal"
          overlayClassName="Overlay"
        >
          <div className="fixed p-4 bottom-0 z-10 border-2 bg-slate-500 border-black w-full">
            {selectedObject?.tags.includes("grimo") ? (
              <Button onClick={e => {
                selectedObject.ultimate ? addUltimate(selectedObject) : addSpell(selectedObject)
              }}>
                Escolher Poder
              </Button>
            ) : (
              <Button onClick={e => setSelectedObject(null)}>
                Você já começa o jogo com este poder
              </Button>
            )}
          </div>
          <div className='p-4'>
            <button onClick={e => setSelectedObject(null)} className='bg-green-600 rounded-full p-2'>
              ✖
            </button>
          </div>
          <div className='h-full overflow-y-auto px-5 pt-5 pb-36 shadow-inner'>
            {selectedObject && <Spell spell={selectedObject} />}
          </div>
        </Modal>

        <div className='gap-4 mt-10'>
          {character?.grimo?.title ? (
            <div>
              <div className='mt-4'>
                <ObjectDrawer
                  opened
                  title="Especiais do Grimo 🌪"
                  objects={ultimateSpells}
                  selectedObject={selectedObject}
                  description={'Seus poderes especiais do Grimo, que só podem ser usados uma vez por dia.'}
                  setSelectedObject={setSelectedObject}
                  ownedSpells={ownedUltimates}
                  setOwnedSpells={setOwnedUltimates}
                  onRemove={removeUltimate}
                  icon={'🌟'}
                />
              </div>

              <div className='mt-4'>
                <ObjectDrawer
                  opened
                  title="Poderes do Grimo ⭐"
                  objects={spells}
                  selectedObject={selectedObject}
                  description={'Exclusivas da academia do seu Grimo.'}
                  setSelectedObject={setSelectedObject}
                  ownedSpells={ownedSpells}
                  setOwnedSpells={setOwnedSpells}
                  onRemove={removeSpell}
                  icon={'🌟'}
                />
              </div>
            </div>
          ) : (
            <div className='border border-amber-300 p-4 bg-red-800 rounded'>
              <h3 className='text-xl font-serif'>
                Poderes do Grimo 🌟
              </h3>
              <i className='text-yellow-100'>Você ainda não tem magias de Grimo pois não selecionou um Grimo.</i>
            </div>
          )}

          <div className='mt-4'>
            <ObjectDrawer
              opened
              title="Poderes do Papel de Jogo 📓"
              objects={character.role.spells}
              selectedObject={selectedObject}
              description={'Exclusivas do seu Papel de Jogo.'}
              setSelectedObject={setSelectedObject}
              ownedSpells={character.role.spells.map(spell => spell.permalink)}
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
              ownedSpells={character.culture.spells.map(spell => spell.permalink)}
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
              ownedSpells={character.specie.spells.map(spell => spell.permalink)}
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
              spells: spells.filter(spell => ownedSpells.includes(spell.permalink)),
              ultimate: ultimateSpells.filter(spell => ownedUltimates.includes(spell.permalink)),
            })
          }}>
            Próximo
          </Button>
        </div>
      </Container>
    </motion.div>
  )
}
