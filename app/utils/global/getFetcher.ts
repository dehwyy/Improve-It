import { Fetcher } from 'swr'

export default function getFetcher<T>() {
  const fetcher: Fetcher<T, string> = route => fetch(route).then(res => res.json())
  return fetcher
}
