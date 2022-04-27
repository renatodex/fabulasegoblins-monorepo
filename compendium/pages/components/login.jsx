import Button from './button'
export default function Login({onCancel}) {
  return (
    <div>
      <input className="p-2.5 w-full rounded font-semibold" type="text" placeholder="email" />
      <input className="mt-5 p-2.5 w-full rounded font-semibold" type="password" placeholder="senha" />
      <div className="mt-5">
        <Button>Logar</Button>
      </div>
      <div className='mt-5'>
        <Button onClick={e => onCancel(e)}>Cancelar</Button>
      </div>
    </div>
  )
}
