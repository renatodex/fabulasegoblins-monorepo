import { useEffect } from "react"
import useSWR from "swr";

export default function useStarterWeapons() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/items/starter-weapons', fetcher)

  return {
    data,
    error,
    isLoading
  }
}
