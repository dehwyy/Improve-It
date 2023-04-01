import { useMemo } from 'react'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

interface IProps {
  answers: Array<{
    correctAnsweredUserId: string | null
    time: number
  }>
}
const AnswersShort = ({ answers }: IProps) => {
  const correctAnswers = useMemo(() => {
    return answers.reduce((p, c) => {
      return p + (c.correctAnsweredUserId ? 1 : 0)
    }, 0)
  }, [answers])
  return (
    <StyleWrapper className="text-red-500 shadow-red-500 border-current shadow-lg" style={{ padding: '10px', cursor: 'default', userSelect: 'text' }}>
      <p className=" text-center">
        Scored <span className="text-green-500">{correctAnswers}</span> out of <span className="text-sky-400">{answers.length}</span>
      </p>
    </StyleWrapper>
  )
}

export default AnswersShort
