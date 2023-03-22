import { useMemo } from 'react'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

interface IProps {
  answers: {
    isCorrect: boolean
    timeMs: number
  }[]
}
const AnswersShort = ({ answers }: IProps) => {
  const correctAnswers = useMemo(() => {
    return answers.reduce((p, c) => {
      return p + (c.isCorrect ? 1 : 0)
    }, 0)
  }, [answers])
  return (
    <StyleWrapper className="text-violet-500 shadow-violet-500 border-current shadow-lg" style={{ padding: '10px' }}>
      Scored {correctAnswers} out of {answers.length}
    </StyleWrapper>
  )
}

export default AnswersShort
