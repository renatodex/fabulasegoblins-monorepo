import CharacterNavigation from "@/src/components/characters/_navigation"
import Container from "@/src/components/container"
import { useRouter } from "next/router"

export default function Inventory() {
  const router = useRouter()
  const { code } = router.query

  return (
    <Container>
      <h1>Inventoryy</h1>

      <CharacterNavigation tab={'inventory'} code={code} />
    </Container>
  )
}
