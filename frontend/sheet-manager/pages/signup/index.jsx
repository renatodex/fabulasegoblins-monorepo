import Logo from '@/src/components/logo'
import Button from '@/src/components/button'
import Input from '@/src/components/input'
import Container from '@/src/components/container'
import { BsArrowLeftCircle } from 'react-icons/bs'
import Checkbox from '@/src/components/checkbox'
import AppLink from '@/src/components/app_link'
import Title, { Subtitle } from '@/src/components/title'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Router, { useRouter } from 'next/router';

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (response.ok) {
      Router.push('/login')
      toast.success("Conta criada com sucesso.")
    } else {
      toast.error("Erro ao criar conta. Tente novamente.")
    }
  }

  return (
    <div>
      <div className="">
        <Logo />
      </div>
      <Container>
        <div className='mt-7'>
          <div className='text-center'>
            <Title>Nova conta</Title>
            <div className='font-adobe-kis'>
              <Subtitle>Crie sua conta em instantes para ter acesso gratuito ao criador de personagens!</Subtitle>
            </div>
          </div>
        </div>
        <form action="" onSubmit={event => handleSubmit(event)}>
          <div className='mt-7'>
            <Input
              label={'Nome'}
              placeholder='Ex: Fulano da Silva'
              type={'name'}
            />
          </div>
          <div className='mt-7'>
            <Input
                onChange={e => setEmail(e.target.value)}
                label={'E-mail'}
                placeholder='Ex: fulano29@gmail.com'
                type={'email'}
            />
          </div>
          <div className='mt-7'>
            <Input
                onChange={e => setPassword(e.target.value)}
                label={'Senha'}
                placeholder='Ex: SenhaSecreta123'
                type={'password'}
            />
          </div>
          <div className='mt-7'>
            <Input
                onChange={e => setConfirmPassword(e.target.value)}
                label={'Confirme sua senha'}
                placeholder='Ex: SenhaSecreta123'
                type={'password'}
            />
          </div>
          <div className='mt-10'>
            <Checkbox onChange={e => setTerms(e.target.checked)}>
                Estou de acordo com a <AppLink href="/privacy-policy">Politica de Privacidade.</AppLink>
            </Checkbox>
          </div>
          <div className='mt-5'>
            <Checkbox>Aceito receber novidades sobre a marca.</Checkbox>
          </div>
          <div className='mt-7 flex gap-4'>
            <Button onClick={e => router.back()}>
              <span className='text-xl text-black inline-block align-middle leading-10'>
                <BsArrowLeftCircle/>
              </span> Voltar
            </Button>
            <Button type='submit'>Enviar</Button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Signup
