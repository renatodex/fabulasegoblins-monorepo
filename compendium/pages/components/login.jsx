import Button from './button'
export default function Login() {
  return (
    <div>
      <input className="py-2.5 rounded font-semibold" type="text" placeholder="email" />
      <input type="password" placeholder="senha" />
      <Button>Logar</Button>
    </div>
  )
}
