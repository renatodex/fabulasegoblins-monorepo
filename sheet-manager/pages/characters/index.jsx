import { useEffect, useState } from 'react';
import Container from '../components/container';
import { Title, Subtitle } from '../components/title'
import useLogin from '../hooks/use_login'
import Button from '../components/button'

function NoCharactersDisplay () {
  return (
    <div className='mt-7 text-center'>
      <img src="/avatar.png" className='w-4/6 inline-block'></img>
      <Subtitle>Você não tem personagens criados, que tal criar um?</Subtitle>

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
        <div key={character.id} className='mt-7 flex space-x-4'>
          <div className='flex-none w-16'>
            <img src="./small_avatar.png" className='flex-none' />
          </div>
          <div className='flex-auto'>
            <p className='text-2xl text-aero-blue'>{character.title}</p>
            <p>Grimo de Lunn</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function () {
  const { token, ping } = useLogin()
  const [characters, setCharacters] = useState([])

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

  return (
    <Container>
      <Title>Meus Personagens</Title>

      {characters.length > 0 ? <CharacterList characters={characters} /> : <NoCharactersDisplay />}
    </Container>
  )
}