import { useEffect } from "react"
import useSWR from "swr";

export default function useCharacterRoles() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/character_roles', fetcher)

  return {
    data,
    error,
    isLoading
  }
}
