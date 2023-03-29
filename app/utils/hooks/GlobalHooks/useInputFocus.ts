import { useCallback, useRef } from 'react'

export default function useInputFocus() {
  const ref = useRef<HTMLInputElement>(null)
  const setFocus = useCallback(() => {
    ref.current && ref.current.focus()
  }, [ref.current])
  return { setFocus, ref }
}
