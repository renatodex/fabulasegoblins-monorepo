import { useEffect } from "react"
import useSWR from "swr";

export default function useGrimos() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR('/api/items/grimos', fetcher)

  return {
    data,
    error,
    isLoading
  }
}
