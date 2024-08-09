import Link from 'next/link'
import { GiNewspaper, GiBattleGear, GiSpellBook, GiBackpack, GiScrollQuill } from 'react-icons/gi'

export default function CharacterNavigation ({ code, tab }) {
  return (
    <div className='fixed w-full m-0 left-0 bottom-0 z-10 lg:max-w-[600px] lg:m-auto lg:left-[calc(50%-300px)]'>
      <svg style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.4) 3px -6px 4px)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#CAFFD2" fillOpacity="1" d="M0,256L60,250.7C120,245,240,235,360,245.3C480,256,600,288,720,304C840,320,960,320,1080,320C1200,320,1320,320,1380,320L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

      <div className='grid grid-cols-5 p-4 text-center bg-aero-blue'>
        <div className={`m-auto text-5xl ${tab == 'index' ? 'text-blue-magenta-violet' : 'text-eton-blue'}`}>
          <Link href={`/characters/${code}`}>
            <GiNewspaper />
          </Link>
        </div>
        <div className={`m-auto text-5xl ${tab == 'gear' ? 'text-blue-magenta-violet' : 'text-eton-blue'}`}>
          <Link href={`/characters/${code}/gear`}>
            <GiBattleGear />
          </Link>
        </div>
        <div className={`m-auto text-5xl ${tab == 'spells' ? 'text-blue-magenta-violet' : 'text-eton-blue'}`}>
          <Link href={`/characters/${code}/spells`}>
            <GiSpellBook />
          </Link>
        </div>
        <div className={`m-auto text-5xl ${tab == 'inventory' ? 'text-blue-magenta-violet' : 'text-eton-blue'}`}>
          <Link href={`/characters/${code}/inventory`}>
            <GiBackpack />
          </Link>
        </div>
        <div className={`m-auto text-5xl ${tab == 'background' ? 'text-blue-magenta-violet' : 'text-eton-blue'}`}>
          <Link href={`/characters/${code}/background`}>
            <GiScrollQuill />
          </Link>
        </div>
      </div>
    </div>
  )
}
