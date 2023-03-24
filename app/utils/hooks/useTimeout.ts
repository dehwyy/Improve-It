import { useCallback, useEffect, useRef, useState } from 'react'

interface IArgs {
  callback: () => void
  time: number
}

interface ReturnParams {
  cancel: () => void
  isDone: boolean
}

export default function useTimeout({ callback, time }: IArgs): ReturnParams {
  const timeout = useRef<NodeJS.Timeout>()
  const [isDone, setDone] = useState(false)
  useEffect(() => {
    timeout.current = setTimeout(() => {
      callback()
      setDone(true)
    }, time)
  })
  const cancelTimeout = useCallback(() => {
    callback()
    setDone(false)
  }, [])
  return {
    cancel: cancelTimeout,
    isDone,
  }
}
