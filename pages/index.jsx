import { Box, Text, Button, Heading } from '@chakra-ui/react'

function HomePage() {
  return (
    <Box>
      <Heading mb={4}>Crie seu persongem</Heading>
      <Text fontSize='x1'>Criar um personagem do zero no Fábulas & Goblins é muito fácil, basta criar uma conta e gerar
        seus personagens com poucos cliques!</Text>
      <Box>
        <Button size='lg' colorScheme='blue' mt='24px'>Crie sua Conta!</Button>
        <Button size='lg' colorScheme='blue' mt='24px'>Entrar</Button>
      </Box>
    </Box>
  )
}

export default HomePage