import Button from './components/button'
import Title from './components/title'

function HomePage() {
  return (
    <div>
      <img src="/header_logo.png" className="m-auto" width={420}></img>
      <div className="mx-8 mt-4">
        <Title>
          Crie seu Personagem
        </Title>
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
    </div>
  )
}

export default HomePage