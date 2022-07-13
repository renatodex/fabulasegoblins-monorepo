import Button from '../components/button'
import Input from '../components/input'

function Login() {
  return (
    <div>
      <img src="/logo_flame.png" className="m-auto pt-20" width={80}></img>
      <div className="mx-6 mt-8">
        <div className="pt-10 text-lg">
          <p className="border rounded-md py-2.5 p-4 font-light ml-3 mr-3">e-mail</p>
          <p className="border rounded-md py-2.5 p-4 font-light ml-3 mr-3 mt-6 mb-5">senha</p>
        </div>
        <p className=" text-sm ml-8">Esqueceu sua senha? <span className="text-aero-blue">Clique aqui para recuperar!</span></p>
        <div className="px-4">
          <div className="mt-14">
            <Button>Entrar</Button>
          </div>
          <p className="mt-4 text-center">ou</p>
          <div className="mt-4 pb-5">
            <Button>Crie sua Conta</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
