import { useEquationStore } from '@/app/utils/store/equationStore'
import useNumberAndMobileKeyboard from '@/app/utils/hooks/GlobalHooks/useNumberAndMobileKeyboard'
import useSubmitEquation from '@/app/utils/hooks/EquationHooks/useSubmitEquation'
import useMobile from '@/app/utils/hooks/GlobalHooks/useMobile'
import { useCallback, useEffect, useState } from 'react'

interface IArgs {
  correctAnswer: number
}

export default function useEquationKeyboard({ correctAnswer }: IArgs) {
  const [enterHasBeenPressed, setEnterPressed] = useState(false)
  const page = useEquationStore(state => state.page)
  const { isMobile } = useMobile()
  useEffect(() => {
    setEnterPressed(false)
  }, [page])
  const { setInputValue, inputValue, keyupHandler } = useNumberAndMobileKeyboard({
    correctAnswer,
    enterDependencies: [page],
    onEnterPress: !isMobile
      ? () => {
          submitEquation({ userId: null })
          setEnterPressed(true)
        }
      : () => {},
  })
  const { submitEquation } = useSubmitEquation({ setInputValue, inputValue })
  return { inputValue, setInputValue, keyupHandler, isMobile, enterHasBeenPressed }
}
