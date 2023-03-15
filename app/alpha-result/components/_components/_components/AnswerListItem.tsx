interface IProps {
  isTruthy: boolean
  timeMs: number
}
const AnswerListItem: React.FC<IProps> = ({ isTruthy, timeMs }) => {
  return <div className={`${isTruthy ? 'border-green-400' : 'border-red-400'} border-2 rounded-md py-3 text-2xl`}>{timeMs / 1000}s</div>
}

export default AnswerListItem
