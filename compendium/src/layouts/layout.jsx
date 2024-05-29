import Waves from 'src/components/waves'
import FlagBr from 'src/components/flagbr'

export default function Layout ({ children }) {
  return (
    <div id="app" className="bg-gunmetal print:bg-transparent rounded-3xl sm:m-4 md:m-8 lg:mt-10 lg:max-w-[1200px] lg:m-auto">
      <header>
        <div className="h-8 bg-aero-blue rounded-t-xl print:hidden"></div>
      </header>

      <main className="text-white mt-6">
        {children}
      </main>

      <footer className="mt-7 print:hidden">
        <Waves />

        <div className="bg-raisin-black pb-5 rounded-b-xl">
          <div className="text-center text-white italic pb-2">
            <FlagBr /> {' '} Português Brasil
          </div>

          <div>
            <div className="w-20 m-auto pb-1">
              <img src="tenda-logo.png" />
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
