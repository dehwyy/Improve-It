import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
interface IProps {
  answers: Array<{
    correctAnsweredUserId: string | null
    time: number
  }>
  userId: string
}
const AnswersFull = ({ answers, userId }: IProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      {answers.map((answer, i) => (
        <StyleWrapper
          key={i}
          style={{ padding: '7px', cursor: 'default' }}
          className={`${
            answer.correctAnsweredUserId == userId ? 'text-green-500 shadow-green-500' : 'text-red-500 shadow-red-500'
          } shadow-lg border-current`}>
          {(answer.time / 1000).toFixed(2)}s
        </StyleWrapper>
      ))}
    </div>
  )
}

export default AnswersFull
