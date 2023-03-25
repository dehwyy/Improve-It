import { useEffect, useRef, useState } from 'react'

interface IArgs {
  time: number
}

interface ReturnParams {
  isDone: boolean
}

export default function useTimeout({ time }: IArgs): ReturnParams {
  const timeout = useRef<NodeJS.Timeout>()
  const [isDone, setDone] = useState(false)
  useEffect(() => {
    setDone(false)
    timeout.current && clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setDone(true)
    }, time)
  }, [time])
  return {
    isDone,
  }
}
