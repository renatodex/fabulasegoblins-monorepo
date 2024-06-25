import { useEffect } from "react"
import useSWR from "swr";

export default function useSpecies(query = null) {
  const url = query ? `/api/spells?${query}` : '/api/spells'

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    data,
    error,
    isLoading
  }
}
