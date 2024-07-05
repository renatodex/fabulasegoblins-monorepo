import { useContext, useState } from 'react'
import ScreenSlideProvider, { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import Role from './steps/role'
import Specie from './steps/specie'
import Culture from './steps/culture'
import Grimo from './steps/grimo'
import Attributes from './steps/attributes'
import StarterWeapon from './steps/starter_weapon'
import Spells from './steps/spells'
import Overview from './overview'
import { AnimatePresence } from 'framer-motion'

export function Views () {
  const { parentViewVisibility, subViewVisibility, selectedSubView } = useContext(ScreenSlideContext)

  const [character, setCharacter] = useState({
    level: 1,
    role: {
      name: null,
      permalink: 'default'
    },
    specie: {
      name: null,
      permalink: 'default'
    },
    culture: {
      name: null,
      permalink: 'default'
    },
    grimo: {
      name: null,
      permalink: 'default'
    },
  })

  const renderSubView = function () {
    if (selectedSubView == 'Roles') {
      return <Role character={character} setCharacter={setCharacter} />
    } else if (selectedSubView == 'Species') {
      return <Specie character={character} setCharacter={setCharacter} />
    } else if (selectedSubView == 'Cultures') {
      return <Culture character={character} setCharacter={setCharacter} />
    } else if (selectedSubView == 'Grimos') {
      return <Grimo character={character} setCharacter={setCharacter} />
    } else if (selectedSubView == 'Attributes') {
      return <Attributes character={character} setCharacter={setCharacter} />
    } else if (selectedSubView == 'StarterWeapon') {
      return <StarterWeapon character={character} setCharacter={setCharacter} />
    } else if (selectedSubView == 'Spells') {
      return <Spells character={character} setCharacter={setCharacter} />
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
