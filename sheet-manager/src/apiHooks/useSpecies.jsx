import { useEffect } from "react"
import useSWR from "swr";

export default function useSpecies() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/species', fetcher)

  return {
    data,
    error,
    isLoading
  }
}
