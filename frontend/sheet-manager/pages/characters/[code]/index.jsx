import { useEffect, useState } from 'react';
import Container from '@/src/components/container';
import { Title, Subtitle } from '@/src/components/title'
import useLogin from '../../../hooks/use_login'
import Button from '@/src/components/button'
import { useRouter } from 'next/router'
import CharacterNavigation from '@/src/components/characters/_navigation'

export default function () {
  const [character, setCharacter] = useState(null)
  const { token, ping } = useLogin()
  const router = useRouter()
  const { code } = router.query

  useEffect(() => {
    if(!router.isReady) return;

    const loadCharacter = async () => {
      const response = await fetch(`/api/characters/${code}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      console.log(data)
      setCharacter(data)
    }

    loadCharacter()
  }, [router])

  useEffect(() => {
    ping()
  }, [router])

  if (!character)
    return (<Container>Loading...</Container>)

  return (
    <Container>
      <div className='mt-7'>
        <div style={{
            backgroundImage: `url('/avatars/${character.specie.permalink}/${character.avatar}.png')`
          }}
          className="h-72 w-72 bg-cover bg-no-repeat bg-center rounded-full border border-aero-blue m-auto"
        />
      </div>

      <div className='text-center'>
        <div className='mt-3'>
          <Title>{character.title}</Title>
        </div>

        <div className=''>
          <Subtitle>{character.specie.title} - Level {character.level}</Subtitle>
        </div>

        <div className='mt-3'>
          <div className='flex px-1'>
            <p className='flex-1 text-left font-serif'>Pontos de vida</p>
            <p className='font-serif text-aero-blue'>{character.hp_points} / {character.max_hp_points}</p>
          </div>

          <div className='w-full h-10 bg-deep-space-sparkle border border-black rounded-2xl p-1.5'>
            <div className='h-full bg-aero-blue rounded-xl' style={{ width: `${character.hp_points*100/character.max_hp_points}%` }} />
          </div>
        </div>

        <div className='mt-3'>
          <div className='flex px-1'>
            <p className='flex-1 text-left font-serif'>Pontos de magia</p>
            <p className='font-serif text-aero-blue'>{character.mp_points} / {character.max_mp_points}</p>
          </div>

          <div className='w-full h-10 bg-deep-space-sparkle border border-black rounded-2xl p-1.5'>
            <div className='h-full bg-bright-lilac rounded-xl' style={{ width: `${character.mp_points*100/character.max_mp_points}%` }} />
          </div>
        </div>

        <div className='mt-3'>
          <div className='flex px-1'>
            <p className='flex-1 text-left font-serif'>Temirs</p>
          </div>

          <div className='w-full h-10 bg-deep-space-sparkle border border-black rounded-2xl p-1.5'>
            <div className='flex px-2'>
              <p className='flex-1 text-left text-yellow-sun font-serif text-lg font-bold'>T$</p>
              <p className='font-serif text-yellow-sun text-lg font-bold'>400</p>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <Button>Baixar PDF da Ficha</Button>
        </div>

        <CharacterNavigation tab={'index'} code={code} />
      </div>
    </Container>
  )
}
