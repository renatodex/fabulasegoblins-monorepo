import CharacterNavigation from "@/src/components/characters/_navigation"
import Container from "@/src/components/container"
import { useRouter } from "next/router"

export default function Background() {
  const router = useRouter()
  const { code } = router.query

  return (
    <Container>
      <h1>Background</h1>

      <CharacterNavigation tab={'background'} code={code} />
    </Container>
  )
}
