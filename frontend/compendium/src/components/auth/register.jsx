import React from 'react'
import Button from './button'
export default function Register() {
  return (
    <div>
      <input className="p-2.5 w-full rounded font-semibold" type="text" placeholder="nome" />
      <input className="mt-5 p-2.5 w-full rounded font-semibold" type="text" placeholder="email" />
      <input className="mt-5 p-2.5 w-full rounded font-semibold" type="password" placeholder="senha" />
      <div className="mt-5">
        <Button>Registrar</Button>
      </div>
    </div>
  )
}
