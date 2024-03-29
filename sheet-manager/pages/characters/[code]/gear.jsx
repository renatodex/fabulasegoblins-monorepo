import CharacterNavigation from "../_navigation"
import Container from "../../components/container"
import { useRouter } from "next/router"

export default function Gear() {
  const router = useRouter()
  const { code } = router.query

  return (
    <Container>
      <h1>Gear</h1>

      <CharacterNavigation tab={'gear'} code={code} />
    </Container>
  )
}