import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
interface IProps {
  answers: {
    isCorrect: boolean
    timeMs: number
  }[]
}
const AnswersFull = ({ answers }: IProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      {answers.map(answer => (
        <StyleWrapper
          style={{ padding: '7px' }}
          className={`${answer.isCorrect ? 'text-green-500 shadow-green-500' : 'text-red-500 shadow-red-500'} shadow-lg border-current`}>
          {(answer.timeMs / 1000).toFixed(2)}s
        </StyleWrapper>
      ))}
    </div>
  )
}

export default AnswersFull
