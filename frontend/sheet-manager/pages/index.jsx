import Button from '@/src/components/button'
import Title from '@/src/components/title'
import MainLayout from '@/src/layouts/main_layout'

function HomePage() {
  return (
    <MainLayout>
      <img src="/header_logo.png" className="m-auto" width={420}></img>
      <div className="mx-8 mt-4">
        <div className='pt-10'>
          <Title>
            Crie seu Personagem
          </Title>
        </div>
        <p className="mt-5 text-sm">
          Criar um personagem do zero no
          <span className="font-bold"> Fábulas &amp; Goblins </span>
           é muito fácil, basta criar uma conta e gerar
          seus personagens com poucos cliques!
        </p>

        <div>
          <div className="mt-5">
            <Button href="/signup">Crie sua Conta</Button>
          </div>
          <div className="mt-5 pb-5">
            <Button href="/login">Entrar</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage
