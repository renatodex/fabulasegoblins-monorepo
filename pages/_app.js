import '../styles/globals.css'
import './components/waves'
import Waves from './components/waves'
import TendaDoGoblin from './components/tendadogoblin'
import Flag_br from './components/flag_br'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app" className="bg-gunmetal h-screen">
      <header>
        <div className="h-8 bg-aero-blue"></div>
      </header>

      <main className="text-white mt-6">
        <Component {...pageProps} />
      </main>

      <footer className="mt-10">
        <Waves></Waves>

        <div className="bg-raisin-black pb-5">
          <div className="text-center text-white italic">
            <Flag_br></Flag_br> &nbsp; Português Brasil
          </div>

          <div>
            <div className="w-14 m-auto">
              <TendaDoGoblin></TendaDoGoblin>
            </div>
          </div>

          <div className="
          text-center px-3
          text-aero-blue italic nt-4
          ">
            Home | Livro Digital | Sobre |
            Ajuda | Contato
          </div>

          <div className='text-aero-blue
          italic text-center mt-4'>
            Todos os direitos reservados.
            O Fábulas & Goblins é licenciado pela  CC BY-NC 4.0
          </div>
        </div>
      </footer>
    </div>
  )
}
export default MyApp