import CharacterNavigation from "@/src/components/characters/_navigation"
import Container from "@/src/components/container"
import { useRouter } from "next/router"

export default function Spells() {
  const router = useRouter()
  const { code } = router.query

  return (
    <Container>
      <h1>Spells</h1>

      <CharacterNavigation tab={'spells'} code={code} />
    </Container>
  )
}
