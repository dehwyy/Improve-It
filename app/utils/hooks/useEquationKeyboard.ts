import { ChangeEvent, KeyboardEvent, useCallback, useEffect, useState } from 'react'
import { useInputStore } from '@/app/utils/store/inputStore'
import { shallow } from 'zustand/shallow'
import useSubmit from '@/app/utils/hooks/useSubmit'
import { useMediaQuery } from '@mui/material'
import { useEquationStore } from '@/app/utils/store/equationStore'
import useNumberAndMobileKeyboard from '@/app/utils/hooks/useNumberAndMobileKeyboard'

interface IArgs {
  correctAnswer: number
}

export default function useEquationKeyboard({ correctAnswer }: IArgs) {
  const page = useEquationStore(state => state.page)
  const { setInputValue, inputValue, keyupHandler } = useNumberAndMobileKeyboard({
    maxInputLength: String(correctAnswer).length,
    enterDependencies: [page],
    onEnterPress: () => submitEquation({ isTruthy: false }),
  })
  const { submitEquation, isTruthy } = useSubmit({ setInputValue, inputValue })
  useEffect(() => {
    if (correctAnswer === Number(inputValue)) {
      submitEquation({ isTruthy: true })
    }
  }, [inputValue])

  const isMobile = useMediaQuery('(max-width:639px)')
  return { inputValue, setInputValue, keyupHandler, isTruthy, isMobile }
}
