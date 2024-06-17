import { useEffect } from "react"
import useSWR from "swr";

export default function useStarterWeapons(attribute) {
  const fetcher = (url) => fetch(url).then((res) => res.json());

  const url = attribute
  ? `/api/items/starter-weapons?attribute=${encodeURIComponent(attribute)}`
  : '/api/items/starter-weapons';

  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    data,
    error,
    isLoading
  }
}
