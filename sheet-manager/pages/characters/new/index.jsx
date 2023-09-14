import { useContext, useState } from 'react'
import ScreenSlideProvider, { ScreenSlideContext } from '../../../src/contexts/screen_slide_context'
import Role from './role'
import Overview from './overview'
import { AnimatePresence } from 'framer-motion'

export function Views () {
  const { parentViewVisibility, subViewVisibility } = useContext(ScreenSlideContext)

  const [character, setCharacter] = useState({
    role: null,
  })

  return (
    <AnimatePresence initial={false}>
      {parentViewVisibility && <Overview character={character} setCharacter={setCharacter} />}
      {subViewVisibility && <Role character={character} setCharacter={setCharacter} />}
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
