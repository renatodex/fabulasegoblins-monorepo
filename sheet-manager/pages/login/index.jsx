import Button from '../components/button'
import Input from '../components/input'
import Logo from '../components/logo'
import Link from '../components/link'

function Login() {
  return (
    <div>
      <div className="pt-14">
        <Logo></Logo>
      </div>
      <div className="mx-10 mt-14">
        <div className="pt-10 text-lg">
          <div className='mt-4'>
            <Input type='text' name='email' placeholder='e-mail'></Input>
          </div>
          <div className='mt-4'>
            <Input type='password' name='password' placeholder='senha'></Input>
          </div>
        </div>
        <p className="pt-5 pl-3 text-sm ">Esqueceu sua senha? {' '}<Link href=''>Clique aqui</Link> para recuperar!</p>

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
      </div>
    </div>
  )
}

export default Login
