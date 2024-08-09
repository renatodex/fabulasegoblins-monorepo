import { useCharacterViewLayout } from "@/src/layouts/character_view_layout"
import { useRouter } from "next/router"
import Title from "@/src/components/title"

export default function Inventory() {
  const router = useRouter()
  const { code } = router.query

  const { isNavOpened, CharacterViewLayout, ToggleButton } = useCharacterViewLayout()

  return (
    <CharacterViewLayout isNavOpened={isNavOpened}>
      <Title useH1={false}>
        <div className="flex gap-3">
          <ToggleButton />
          <h1 className="self-center flex-1">Inventário</h1>
        </div>
      </Title>

    </CharacterViewLayout>
  )
}
