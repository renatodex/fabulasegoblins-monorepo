import Button from '../components/button'
import Input from '../components/input'

function Login() {
  return (
    <div>
      <div className="pt-14">
        <img src="/logo_flame.png" className="m-auto" width={80}></img>
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
        <p className="pt-5 pl-3 text-sm ">Esqueceu sua senha? {' '}<a href='' className="text-aero-blue">Clique aqui</a> para recuperar!</p>
        <div className="mt-14">
          <div>
            <Button>Crie sua Conta</Button>
          </div>
          <div className='m-auto text-center pt-3'>
            ou
          </div>
          <div className="mt-3 pb-5">
            <Button>Entrar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
