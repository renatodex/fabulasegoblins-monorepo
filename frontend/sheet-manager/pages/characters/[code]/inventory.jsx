import { useCharacterViewLayout } from "@/src/layouts/character_view_layout"
import { useRouter } from "next/router"
import Title from "@/src/components/title"
import useLogin from "hooks/use_login"
import useCharacter from "@/src/apiHooks/useCharacter"
import * as GiIcons from "react-icons/gi";

export function Item ({ item }) {
  let Icon = GiIcons.GiSwapBag

  if (item.icon && item.icon.startsWith("Gi")) {
    Icon = GiIcons[item.icon]
  }

  return (
    <div className="p-4 border-t border-l flex border-r last:border-b last:rounded-b-lg first:rounded-t-lg border-lavender-blue">
      <Icon className="inline-block text-3xl self-center" /> <span className="self-center pl-2">{item.title}</span>
    </div>
  )
}

export default function Inventory() {
  const router = useRouter()
  const { code } = router.query
  const { token, ping } = useLogin()

  const { data: character } = useCharacter({
    code, token
  })

  const { isNavOpened, CharacterViewLayout, ToggleButton } = useCharacterViewLayout()

  if (!character) return null

  return (
    <CharacterViewLayout isNavOpened={isNavOpened}>
      <Title useH1={false}>
        <div className="flex gap-3">
          <ToggleButton />
          <h1 className="self-center flex-1">Inventário</h1>
        </div>
      </Title>

      <div className="mt-6">
        {character.items.map(item => (
          <Item item={item} />
        ))}
      </div>

    </CharacterViewLayout>
  )
}
