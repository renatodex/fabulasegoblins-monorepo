import { useState } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'
import '@/src/components/waves'
import Waves from '@/src/components/waves'
import FlagBr from '@/src/components/flagbr'
import { IoArrowBackCircle } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import LogoFlameIcon from '@/src/components/logo_flame_icon';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head'
import useLogin from 'hooks/use_login'
import { motion } from 'framer-motion'

function AccountNavigationModal ({ onLogout, onClose, visible }) {
  if (!visible) return null;

  return (
    <div className='fixed'>
      <div className=' fixed text-white -translate-x-2/4 -translate-y-2/4 w-[300px] left-1/2 top-1/2'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <div className='border shadow-xl rounded-2xl bg-slate-900/95 p-3'>
            <div className='text-3xl flex justify-between p-4'>
              <span className='font-dolly-bold'>Minha conta</span>
              <IoMdCloseCircle onClick={onClose} className='inline-block' />
            </div>
            <ul className='p-4 pt-0 text-xl font-adobe-kis'>
              <li className='border-b border-t border-white py-3'>
                <a href="#" className='text-gray-500'>Alterar dados (em breve)</a>
              </li>
              <li className='border-b py-3'>
                <a href="#" onClick={onLogout}>Sair</a>
                {/* {loading ? 'Saindo...' : (<a href="#" onClick={onLogout}>Sair</a>)} */}

              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MyApp({ Component, pageProps }) {
  const { removeToken } = useLogin()

  const [accountNavigationVisible, setAccountNavigationVisible] = useState(false)

  const router = useRouter();
  const { pathname } = router;

  function onLogout () {
    removeToken()
    window.location.href = '/'
  }

  const isLoginPage = ['/', '/login', '/signup'].includes(pathname)

  return (
    <div id="app" className="min-h-screen max-w-[600px] m-auto shadow-2xl overflow-hidden">
      <Head>
        <meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="stylesheet" href="https://use.typekit.net/pkz8ulf.css"></link>
      </Head>

      <div id="modal" />

      <AccountNavigationModal
        visible={accountNavigationVisible}
        onClose={e => setAccountNavigationVisible(false)}
        onLogout={onLogout}
      />

      <header className='pt-4 shadow-2xl p-3'>
        {!isLoginPage && (
          <div className='flex justify-between'>
            <a className='text-aero-blue text-5xl' href="javascript:history.back()">
              <IoArrowBackCircle />
            </a>
            <div className='text-4xl flex'>
              <a className='text-aero-blue self-center' href="/characters">
                <LogoFlameIcon color='#caffd2' className='w-12 h-full' />
              </a>
            </div>
            <button onClick={e => setAccountNavigationVisible(true)} className='text-aero-blue text-5xl'>
              <MdAccountCircle/>
            </button>
          </div>
        )}
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

            <div className="bg-raisin-black/70 pb-5 rounded-b-xl">
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
