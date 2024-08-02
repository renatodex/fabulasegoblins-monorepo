import MainLayout from "../layouts/main_layout"
import { GiMagicPortal } from "react-icons/gi"
import Button from "./button"

export default function SessionExpired () {
  return (
    <MainLayout>
      <div className="text-center text-9xl text-aero-blue">
        <GiMagicPortal className="inline-block" />
      </div>
      <div className="text-4xl font-dolly-bold text-center mt-7 px-12">
        Sua sessão foi sugada por uma outra dimensão.
        <p className="mt-5">Que tal logar novamente?</p>
        <div className="mt-7 font-adobe-kis">
          <Button onClick={e => window.location.href = '/login'}>Fazer Login</Button>
        </div>
      </div>
    </MainLayout>
  )
}
