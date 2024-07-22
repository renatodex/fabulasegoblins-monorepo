import '../styles/globals.css'
import '@/src/components/waves'
import Waves from '@/src/components/waves'
import TendaDoGoblin from '@/src/components/tendadogoblin'
import FlagBr from '@/src/components/flagbr'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div id="app" className="bg-gunmetal min-h-screen max-w-[600px] m-auto shadow-2xl">
      <Head>
        <meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/pkz8ulf.css"></link>
      </Head>

      <div id="modal" />

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
            <div className="w-20 m-auto pb-1">
              <img src="/tenda-logo.png"></img>
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

      <ToastContainer />
    </div>
  )
}
export default MyApp
