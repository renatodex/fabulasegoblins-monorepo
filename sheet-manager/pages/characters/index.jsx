import { useEffect } from 'react';
import Container from '../components/container';
import Title from '../components/title'
import useLogin from '../hooks/use_login'

export default function () {
  const { ping } = useLogin()

  useEffect(() => {
    ping()
  }, [])

  return (
    <Container>
      <Title>Meus Personagens</Title>
    </Container>
  )
}