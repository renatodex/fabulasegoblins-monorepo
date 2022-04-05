import Button from './components/button'
import Display from './components/display'


function HomePage() {
  return (
    <div>
      <Display mb={4}>Crie seu persongem</Display>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <p>Criar um personagem do zero no Fábulas & Goblins é muito fácil, basta criar uma conta e gerar
        seus personagens com poucos cliques!</p>
      <div>
        <Button>Crie sua Conta!</Button>
        <Button>Entrar</Button>
      </div>
    </div>
  )
}

export default HomePage