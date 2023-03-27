import { useEffect } from 'react'
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
    onEnterPress: () => {}, // NO enter for a while
  })
  const isMobile = useMediaQuery('(max-width:639px)')
  return { inputValue, setInputValue, keyupHandler, isMobile }
}
