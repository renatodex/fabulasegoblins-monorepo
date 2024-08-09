import MainLayout, { LayoutPadding } from "@/src/layouts/main_layout"
import { useState } from 'react'
import { GiMeeple } from "react-icons/gi";
import { GiScrollUnfurled } from "react-icons/gi";
import { GiFireSpellCast } from "react-icons/gi";
import { GiSwordsEmblem } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
import classNames from "classnames"
import { useRouter } from "next/router";

function NavItem ({ href, children }) {
  return (
    <div className="flex flex-col text-4xl gap-7 text-center">
      <a
        href={href}
        className="w-14 h-14 bg-slate-300 hover:bg-aero-blue text-raisin-black rounded-full inline-flex items-center justify-center self-center"
      >
        {children}
      </a>
    </div>
  )
}

export function ToggleButton ({ setIsNavOpened, isNavOpened }) {
  return (
    <button
      onClick={e => {
        setIsNavOpened(!isNavOpened)
      }}
      className="bg-aero-blue text-4xl border-raisin-black shadow-lg text-raisin-black border p-1.5 rounded-lg"
    >
      <CgMenuGridR />
    </button>
  )
}

export function useCharacterViewLayout () {
  const [isNavOpened, setIsNavOpened] = useState(false)

  return {
    CharacterViewLayout,
    isNavOpened,
    setIsNavOpened,
    ToggleButton: function ({}) {
      return <ToggleButton isNavOpened={isNavOpened} setIsNavOpened={setIsNavOpened} />
    }
  }
}

export default function CharacterViewLayout({ children, isNavOpened }) {
  const router = useRouter()
  const { code } = router.query

  return (
    <MainLayout hasPadding={false}>
      <div className="flex h-screen">
        <div className={classNames("transition-all overflow-hidden h-full", {
          'min-w-[90px] w-[90px]': isNavOpened,
          'min-w-[0] w-[0]': !isNavOpened
        })}>
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#475B62] rounded-tl-3xl to-transparent"></div>
            <div className="absolute inset-0"></div>
            <LayoutPadding>
              <div className="flex flex-col gap-7 text-center relative z-10">
                <NavItem href={`/characters/${code}`}>
                  <GiMeeple />
                </NavItem>

                <NavItem href={`/characters/${code}/gear`}>
                  <GiScrollUnfurled />
                </NavItem>

                <NavItem href={`/characters/${code}/spells`}>
                  <GiFireSpellCast />
                </NavItem>

                <NavItem href={`/characters/${code}/inventory`}>
                  <GiSwordsEmblem />
                </NavItem>

                <NavItem href={`/characters/${code}/background`}>
                  <GiNotebook />
                </NavItem>
              </div>
            </LayoutPadding>
          </div>
        </div>

        <div className="sm:px-10 flex-1 px-4 min-w-[350px]">
          <LayoutPadding>
            {children}
          </LayoutPadding>
        </div>
      </div>
    </MainLayout>
  )
}
