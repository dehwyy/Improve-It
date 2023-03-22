import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import { Difficulties, Modes } from '@/types/export'
interface IProps {
  mode: Modes
  difficulty: Difficulties
  time: number
}
const SessionInfo = ({ mode, difficulty, time }: IProps) => {
  return (
    <StyleWrapper
      className="sm:w-full mx-auto text-violet-500 shadow-violet-500 shadow-lg border-current gap-y-5"
      style={{
        alignItems: 'start',
        justifyContent: 'start',
        height: 'min-content',
        cursor: 'default',
        userSelect: 'text',
      }}>
      <p className="text-white">
        <span className="text-red-500">Mode:</span> {mode}
      </p>
      <p className="text-white">
        <span className="text-pink-500">Difficulty:</span> {difficulty}
      </p>
      <p className="text-white">
        <span className="text-fuchsia-500">Time:</span> {(time / 1000).toFixed(2)}s
      </p>
    </StyleWrapper>
  )
}

export default SessionInfo
