import { useContext, useState } from 'react'
import ScreenSlideProvider, { ScreenSlideContext } from '@/src/contexts/screen_slide_context'
import Role from '@/src/components/characters/steps/role'
import Specie from '@/src/components/characters/steps/specie'
import Culture from '@/src/components/characters/steps/culture'
import Grimo from '@/src/components/characters/steps/grimo'
import Attributes from '@/src/components/characters/steps/attributes'
import StarterWeapon from '@/src/components/characters/steps/starter_weapon'
import Spells from '@/src/components/characters/steps/spells'
import Details from '@/src/components/characters/steps/details'
import Overview from './overview'
import { AnimatePresence } from 'framer-motion'
import useLocalStorageState from '@/src/utilitaryHooks/use_local_storage_state'
import useLogin from 'hooks/use_login'
import MainLayout from '@/src/layouts/main_layout'
import { useRouter } from 'next/router'

export function Views () {
  const router = useRouter()

  const { parentViewVisibility, subViewVisibility, selectedSubView, setParentViewVisibility, setSubViewVisibility } = useContext(ScreenSlideContext)

  const [character, setCharacter] = useLocalStorageState('new_character_v1', {
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
    } else if (selectedSubView == 'Details') {
      return <Details character={character} setCharacter={setCharacter} />
    }
  }

  return (
    <MainLayout onLayoutBack={e => {
      if (parentViewVisibility) {
        router.back()
      } else {
        setCharacter({
          ...character,
        })
        setParentViewVisibility(true)
        setSubViewVisibility(false)
      }
    }}>
      <AnimatePresence initial={false}>
        {parentViewVisibility && <Overview character={character} setCharacter={setCharacter} />}
        {subViewVisibility && renderSubView()}

      </AnimatePresence>
    </MainLayout>
  )
}

export default function Index () {
  const { ping } = useLogin()

  ping()

  return (
    <ScreenSlideProvider>
      <Views />
    </ScreenSlideProvider>
  )
}
