import '../styles/globals.css'
import './components/waves'
import Waves from './components/waves'
import TendaDoGoblin from './components/tendadogoblin'
import FlagBr from './components/flagbr'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app" className="bg-gunmetal h-screen">
      <header>
        <div className="h-8 bg-aero-blue"></div>
      </header>

      <main className="text-white mt-6">
        <Component {...pageProps} />
      </main>

      <footer className="mt-14">
        <Waves />

        <div className="bg-raisin-black pb-5">
          <div className="text-center text-white italic pb-2">
            <FlagBr /> &nbsp; Português Brasil
          </div>

          <div>
            <div className="w-14 m-auto pb-1">
              <TendaDoGoblin />
            </div>
          </div>

          <div className="text-center px-5
          text-aero-blue italic nt-4
          pt-3 text-lg">
            Home | Livro Digital | Sobre <br/>|
            Ajuda | Contato
          </div>

          <div className='text-aero-blue
          italic text-center mt-5'>
            <p>Todos os direitos reservados.</p>
            <p>O Fábulas &amp; Goblins é licenciado pela</p>
            <p>CC BY-NC 4.0</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default MyApp