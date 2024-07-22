import Button from '@/src/components/button'
import Input from '@/src/components/input'
import Logo from '@/src/components/logo'
import AppLink from '@/src/components/app_link'
import { useEffect, useState } from 'react'
import Router from 'next/router'
import useLogin from '../../hooks/use_login'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { token, login } = useLogin()

  async function handleSubmit(event) {
    event.preventDefault();
    login(email, password)
  }

  useEffect(() => {
    if (token) {
      Router.push('/characters')
    }
  }, [])

  return (
    <div>
      <div className="pt-14">
        <Logo></Logo>
      </div>
      <form className="mx-10 mt-14" onSubmit={event => handleSubmit(event)}>
        <div className="pt-10 text-lg">
          <div className='mt-4'>
            <Input
              type='text'
              name='email'
              placeholder='e-mail'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='mt-4'>
            <Input
              type='password'
              name='password'
              placeholder='senha'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <p className="pt-5 pl-3 text-sm ">Esqueceu sua senha? {' '}<AppLink href='/'>Clique aqui</AppLink> para recuperar!</p>

        <div className="mt-14">
          <div className='m-auto text-center pt-3'>
            <div className="pb-3">
              <Button>Entrar</Button>
            </div>
            ou
            <div className="mt-3">
              <Button href="/signup">Crie sua Conta</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
