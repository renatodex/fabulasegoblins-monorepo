import Button from './components/button'


function HomePage() {
  return (
    <div>
      <img src="/header_logo.png" className="m-auto" width={420}></img>
      <div className="mx-6 mt-4">
        <h1 className="text-4xl font-bold font-serif pt-1">Crie seu personagem</h1>
        <p className="mt-5 text-sm">
          Criar um personagem do zero no
          <span className="font-bold"> Fábulas &amp; Goblins </span>
           é muito fácil, basta criar uma conta e gerar
          seus personagens com poucos cliques!
        </p>

        <div>
          <div className="mt-5">
            <Button>Crie sua Conta!</Button>
          </div>
          <div className="mt-5 pb-5">
            <Button>Entrar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage