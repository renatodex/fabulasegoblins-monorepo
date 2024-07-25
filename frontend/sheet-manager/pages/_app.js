import '../styles/globals.css'
import '@/src/components/waves'
import Waves from '@/src/components/waves'
import FlagBr from '@/src/components/flagbr'
import { RiMenu5Fill } from "react-icons/ri";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import LogoFlameIcon from '@/src/components/logo_flame_icon';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@/src/components/button'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app" className="min-h-screen max-w-[600px] m-auto shadow-2xl overflow-hidden">
      <Head>
        <meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/pkz8ulf.css"></link>
      </Head>

      <div id="modal" />

      <header className='pt-4 shadow-2xl p-3'>
        <div className='flex justify-between'>
          <a className='text-aero-blue text-5xl' href="javascript:history.back()">
            <IoArrowBackCircle />
          </a>
          <div className='text-4xl flex'>
            <a className='text-aero-blue self-center' href="/characters">
              <LogoFlameIcon color='#caffd2' className='w-12 h-full' />
            </a>
          </div>
          <div className='text-aero-blue text-5xl'>
            <MdAccountCircle/>
          </div>
        </div>
      </header>

      <div className='rounded-3xl text-[#26594F] bg-[#26594F] pt-3'>
        <div
          className='rounded-3xl bg-gradient-to-b from-[#243338] to-[#528697]'
        >
          <main className="text-white p-4 pt-8">
            <Component {...pageProps} />
          </main>

          <footer className="mt-14">
            <Waves />

            <div className="bg-raisin-black/70 pb-5">
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
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}
export default MyApp
