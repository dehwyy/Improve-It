import { useEffect, useState } from 'react'
import useSubmit from '@/app/utils/hooks/useSubmit'
import { useUserStore } from '@/app/utils/store/globalStore'
import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'

interface IArgs {
  setInputValue: (e: null, value: string) => void
  inputValue: string
  correctAnswer: number
  botIsDone?: boolean
}
export default function useLobby({ setInputValue, inputValue, correctAnswer, botIsDone }: IArgs) {
  const userId = useUserStore(state => state.userId) as string
  const selectedGameType = useGameTypeStore(state => state.gameType)
  const [answeredUserId, setAnsweredUserId] = useState<string | 'bot'>()
  const { submitEquation } = useSubmit({ setInputValue, inputValue })
  useEffect(() => {
    if (inputValue && Number(inputValue) === correctAnswer) {
      submitEquation({ userId })
      setAnsweredUserId(userId)
    } else if (selectedGameType == 'With Bot' && botIsDone) {
      const res = submitEquation({ userId: 'bot' })
      res !== null && setAnsweredUserId('bot')
    }
  }, [inputValue, botIsDone])
  return {
    currentUserId: userId,
    answeredUserId,
  }
}
