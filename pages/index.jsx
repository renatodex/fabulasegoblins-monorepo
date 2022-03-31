import { Box, Text, Button } from '@chakra-ui/react'

function HomePage() {
  return (
    <Box>
      <Text>Crie seu persongem</Text>
      <Text>Criar um personagem do zero no Fábulas & Goblins é muito fácil, basta criar uma conta e gerar
        seus personagens com poucos cliques!</Text>
      <Box>
        <Button>Crie sua Conta!</Button>
        <Button>Entrar</Button>
      </Box>
    </Box>
  )
}

export default HomePage