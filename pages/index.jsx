import Button from './components/button'
import Display from './components/Display'

function HomePage() {
  return (
    <div>
      <Display mb={4}>Crie seu persongem</Display>
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