import { useState } from 'react'
import { useRouter } from 'next/router'
import Waves from '@/src/components/waves'
import FlagBr from '@/src/components/flagbr'
import { IoArrowBackCircle } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import LogoFlameIcon from '@/src/components/logo_flame_icon';
import { ToastContainer } from 'react-toastify';
import useLogin from 'hooks/use_login'
import AccountNavigationModal from '@/src/layouts/account_navigation_modal'
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout ({ children, onLayoutBack = 'javascript:history.back()' }) {
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
    <>
      <div id="modal" />

      <AccountNavigationModal
        visible={accountNavigationVisible}
        onClose={e => setAccountNavigationVisible(false)}
        onLogout={onLogout}
      />

      <header className='pt-4 p-3'>
        {!isLoginPage && (
          <div className='flex justify-between'>
            {typeof(onLayoutBack) === 'string' ? (
              <a className='text-aero-blue text-5xl' href={onLayoutBack}>
                <IoArrowBackCircle />
              </a>
            ) : (
              <a className='text-aero-blue text-5xl' onClick={onLayoutBack}>
                <IoArrowBackCircle />
              </a>
            )}
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
            {children}
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
    </>
  )
}
