import { useMediaQuery } from '@mui/material'
import { useEquationStore } from '@/app/utils/store/equationStore'
import useNumberAndMobileKeyboard from '@/app/utils/hooks/GlobalHooks/useNumberAndMobileKeyboard'

interface IArgs {
  correctAnswer: number
}

export default function useEquationKeyboard({ correctAnswer }: IArgs) {
  const page = useEquationStore(state => state.page)
  const { setInputValue, inputValue, keyupHandler } = useNumberAndMobileKeyboard({
    correctAnswer,
    enterDependencies: [page],
    onEnterPress: () => {}, // NO enter for a while
  })
  const isMobile = useMediaQuery('(max-width:639px)')
  return { inputValue, setInputValue, keyupHandler, isMobile }
}
