import { useMediaQuery } from '@mui/material'
import { useEquationStore } from '@/app/utils/store/equationStore'
import useNumberAndMobileKeyboard from '@/app/utils/hooks/GlobalHooks/useNumberAndMobileKeyboard'
import useSubmitEquation from '@/app/utils/hooks/EquationHooks/useSubmitEquation'
import useMobile from '@/app/utils/hooks/GlobalHooks/useMobile'

interface IArgs {
  correctAnswer: number
}

export default function useEquationKeyboard({ correctAnswer }: IArgs) {
  const page = useEquationStore(state => state.page)
  const { isMobile } = useMobile()
  const { setInputValue, inputValue, keyupHandler } = useNumberAndMobileKeyboard({
    correctAnswer,
    enterDependencies: [page],
    onEnterPress: !isMobile ? () => submitEquation({ userId: null }) : () => {},
  })
  const { submitEquation } = useSubmitEquation({ setInputValue, inputValue })
  return { inputValue, setInputValue, keyupHandler, isMobile }
}
