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
    <StyleWrapper
      className="text-violet-500 shadow-violet-500 border-current shadow-lg"
      style={{ padding: '10px', cursor: 'default', userSelect: 'text' }}>
      <p>
        Scored <span className="text-green-500">{correctAnswers}</span> out of <span className="text-red-400">{answers.length}</span>
      </p>
    </StyleWrapper>
  )
}

export default AnswersShort
