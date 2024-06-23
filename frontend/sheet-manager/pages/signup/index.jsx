import Logo from '../components/logo'
import Button from '../components/button'
import Input from '../components/input'
import Container from '../components/container'
import { BsArrowLeftCircle } from 'react-icons/bs'
import Checkbox from '../components/checkbox'
import AppLink from '../components/app_link'
import Title from '../components/title'
import { toast } from 'react-toastify'
import { useState } from 'react'
import Router from 'next/router'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [terms, setTerms] = useState(false)

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
      <Container>
        <p>
          <AppLink href="/">
            <span className='text-4xl float-left'><BsArrowLeftCircle></BsArrowLeftCircle></span>
            <span className='align-middle text-xl ml-3 mt-1 inline-block'>
              Voltar
            </span>
          </AppLink>
        </p>
      </Container>
      <div className="pt-14">
        <Logo></Logo>
      </div>
      <Container>
        <div className='mt-12'>
            <div className='pt-10'>
              <Title>Nova conta</Title>
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
                  type={'e-mail'}
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
                  Estou de acordo com a <Link>Politica de Privacidade.</Link>
              </Checkbox>
          </div>
          <div className='mt-5'>
              <Checkbox>Aceito receber novidades sobre a marca.</Checkbox>
          </div>
          <div className='mt-7'>
              <Button>Enviar</Button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Signup
