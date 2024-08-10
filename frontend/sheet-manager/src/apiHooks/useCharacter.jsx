import { useEffect } from "react"
import useSWR from "swr";

export default function useCharacter({code, token}) {
  const fetcher = (url) => fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => res.json());

  const url = code ? `/api/characters/${code}` : null;

  const { data, error, isLoading } = useSWR(url, fetcher)

  return {
    data,
    error,
    isLoading
  }
}
