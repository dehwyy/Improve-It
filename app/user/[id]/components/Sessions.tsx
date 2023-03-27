import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import Header from '@/app/user/[id]/components/_components/Session/Header'
import AnswersFull from '@/app/user/[id]/components/_components/Session/AnswersFull'
import SessionInfo from '@/app/user/[id]/components/_components/Session/SessionInfo'
import AnswersTransition from '@/app/user/[id]/components/_components/Session/AnswersTransition'
import AnswersShort from '@/app/user/[id]/components/_components/Session/AnswersShort'
import { Difficulties, Modes, PlayerModes } from '@/types/export'
interface IProps {
  userId: string
  sessions: {
    session: {
      difficulty: string
      mode: string
      count: number
      playDate: Date
      playerMode: string
      sessionWinnerId: string | null
      correctAnswers: Array<{
        correctAnsweredUserId: string | null
        time: number
      }>
    }
  }[]
}
const Sessions = ({ userId, sessions }: IProps) => {
  return (
    <div className="flex flex-col gap-y-7 w-5/6 md:w-full mx-auto">
      {sessions.map(({ session }, i) => (
        <StyleWrapper key={i} style={{ cursor: 'default' }} className="text-blue-500 shadow-blue-500 shadow-lg font-extrabold border-current">
          <div className="text-white w-full">
            <Header userId={userId} time={session.playDate} playerMode={session.playerMode} winner={session.sessionWinnerId} />
            <div className="w-full grid grid-cols-2 lg:flex md:flex-col-reverse lg:gap-x-5 text-xl gap-y-8 py-5">
              <div className=" sm:w-full w-2/3 mx-auto flex flex-col gap-y-5">
                <AnswersTransition full={<AnswersFull userId={userId} answers={session.correctAnswers} />}>
                  <AnswersShort answers={session.correctAnswers} />
                </AnswersTransition>
              </div>
              <div className="w-2/3 sm:w-full mx-auto">
                <SessionInfo mode={session.mode} difficulty={session.difficulty} answers={session.correctAnswers} />
              </div>
            </div>
          </div>
        </StyleWrapper>
      ))}
    </div>
  )
}

export default Sessions
