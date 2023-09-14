import { useContext, useState } from 'react'
import ScreenSlideProvider, { ScreenSlideContext } from '../../../src/contexts/screen_slide_context'
import Role from './role'
import Specie from './specie'
import Overview from './overview'
import { AnimatePresence } from 'framer-motion'

export function Views () {
  const { parentViewVisibility, subViewVisibility, selectedSubView } = useContext(ScreenSlideContext)

  const [character, setCharacter] = useState({
    role: {
      name: null,
      permalink: 'default'
    },
    specie: {
      name: null,
      permalink: 'default'
    }
  })

  console.log(character)

  const renderSubView = function () {
    if (selectedSubView == 'Roles') {
      return <Role character={character} setCharacter={setCharacter} />
    } else if(selectedSubView == 'Species') {
      return <Specie character={character} setCharacter={setCharacter} />
    }
  }

  return (
    <AnimatePresence initial={false}>
      {parentViewVisibility && <Overview character={character} setCharacter={setCharacter} />}
      {subViewVisibility && renderSubView()}

    </AnimatePresence>
  )
}

export default function Index () {
  return (
    <ScreenSlideProvider>
      <Views />
    </ScreenSlideProvider>
  )
}
