import { useEffect, useState } from 'react';
import Container from '@/src/components/container';
import { Title, Subtitle } from '@/src/components/title'
import useLogin from '../../hooks/use_login'
import Button from '@/src/components/button'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from 'next/link';

function NoCharactersDisplay () {
  return (
    <div className='mt-7 text-center'>
      <img src="/avatar.png" className='w-4/6 inline-block'></img>

      <div className='pt-10'>
        <Subtitle>Você não tem personagens criados, que tal criar um?</Subtitle>
      </div>

      <div className="mt-7">
        <Button>Criar Personagem</Button>
      </div>
    </div>
  )
}

function CharacterList ({ characters }) {
  return (
    <div>
      {characters.map(character => (
        <div onClick={e => window.location = `/characters/${character.code}`} key={character.id} className='mt-7 flex space-x-4'>
          <div className='flex-none w-16'>
            <img src={`/avatars/${character.specie.permalink}/${character.avatar}.png`} className='flex-none' />
          </div>
          <div className='flex-auto'>
            <p className='text-2xl text-aero-blue'>{character.title} - Lv {character.level}</p>
            <p className='flex'>
              <img src={`/grimos/full/${character.initial_grimo.permalink}.jpg`} width={30} />
              {character.initial_grimo.title} - Level {character.level}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function () {
  const { token, ping } = useLogin()
  const [characters, setCharacters] = useState(null)

  useEffect(() => {
    const loadCharacters = async () => {
      const response = await fetch('/api/characters', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      setCharacters(data)
    }

    loadCharacters()
  }, [])

  useEffect(() => {
    ping()
  }, [])

  if (!characters) return (
    <div className='m-auto w-3/4 border border-purple-300 p-4 rounded mt-20'>
      <div className="flex justify-center items-center text-purple-400">
        <AiOutlineLoading3Quarters className="animate-spin text-3xl" />
      </div>
      <p className='text-center text-green-400 mt-2 text-2xl font-dolly-bold'>
        Carregando personagens....
      </p>
    </div>
  )

  return (
    <Container>
      <div className='pt-10'>
        <Title>Meus Personagens</Title>
      </div>

      <div className='mt-7'>
        <Link
          onClick={e => {
            window.localStorage.removeItem('new_character_v1')
            window.location.href = '/characters/new'
          }}
          href='#'
          className="border w-full rounded-lg border-dashed inline-block bg-dark-charcoal p-4"
        >
          ➕ Novo Personagem
        </Link>
      </div>

      {characters.length > 0 ? <CharacterList characters={characters} /> : <NoCharactersDisplay />}

    </Container>
  )
}
