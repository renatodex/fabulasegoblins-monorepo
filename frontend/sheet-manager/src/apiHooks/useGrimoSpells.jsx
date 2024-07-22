import { useEffect } from "react"
import useSWR from "swr";
import useSpells from "./useSpells";

export default function useGrimoSpells(permalink) {
  const { data, error, isLoading } = useSpells(
    `q[filter_tags_eq_any]=${permalink}`,
  )

  if (isLoading) return {
    spellGroups: null
  }

  return {
    data,
    spellGroups: [
      { label: "Especiais", spells: data.filter(s => s.tier == null) },
      { label: "Grau 1", spells: data.filter(s => s.tier == 1) },
      { label: "Grau 2", spells: data.filter(s => s.tier == 2) },
      { label: "Grau 3", spells: data.filter(s => s.tier == 3) },
      { label: "Grau 4", spells: data.filter(s => s.tier == 4) },
    ],
    error,
    isLoading,
  }
}
