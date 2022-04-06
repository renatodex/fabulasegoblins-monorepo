import Button from './components/button'

function HomePage() {
  return (
    <div>

      <img src="/header_logo.png"></img>
      <h1 className="text-4xl font-bold font-serif">Crie seu personagem</h1>
      <p className="mt-5">Criar um personagem do zero no Fábulas & Goblins é muito fácil, basta criar uma conta e gerar
        seus personagens com poucos cliques!</p>
      <div >
        <div className="mt-5">
          <Button>Crie sua Conta!</Button>
        </div>
        <div className="mt-5">
          <Button>Entrar</Button>
        </div>
      </div>
    </div>
  )
}

export default HomePage