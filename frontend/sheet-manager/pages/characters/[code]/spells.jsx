import { useCharacterViewLayout } from "@/src/layouts/character_view_layout"
import { useRouter } from "next/router"
import Title from "@/src/components/title"
import useCharacter from "@/src/apiHooks/useCharacter"
import Spell from '@fabulasegoblins/ui/spell'
import useLogin from "hooks/use_login"

export default function Spells() {
  const router = useRouter()
  const { code } = router.query
  const { token } = useLogin()

  const { isNavOpened, CharacterViewLayout, ToggleButton } = useCharacterViewLayout()
  const { data: character } = useCharacter({ code, token })

  console.log(character)

  if (!character) return null

  return (
    <CharacterViewLayout isNavOpened={isNavOpened}>
      <Title useH1={false}>
        <div className="flex gap-3">
          <ToggleButton />
          <h1 className="self-center flex-1">Magias</h1>
        </div>

        <div className="mt-6 border-t pt-8 border-dashed border-raisin-black">
          <h2 className="text-3xl">Habilidades de Espécie</h2>
          <div className="mt-8">
            {character.specie.spells.map(spell => (
              <Spell spell={spell} defaultCollapse={true} />
            ))}
          </div>
        </div>

        <div className="mt-6 border-t pt-8 border-dashed border-raisin-black">
          <h2 className="text-3xl">Habilidades de Cultura</h2>
          <div className="mt-8">
            {character.culture.spells.map(spell => (
              <Spell spell={spell} defaultCollapse={true} />
            ))}
          </div>
        </div>

        <div className="mt-6 border-t pt-8 border-dashed border-raisin-black">
          <h2 className="text-3xl">Habilidades de Papel</h2>
          <div className="mt-8">
            {character.character_role.spells.map(spell => (
              <Spell spell={spell} defaultCollapse={true} />
            ))}
          </div>
        </div>
      </Title>

    </CharacterViewLayout>
  )
}
