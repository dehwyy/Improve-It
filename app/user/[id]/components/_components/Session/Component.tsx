import Header from '@/app/user/[id]/components/_components/Session/Header'
import AnswersTransition from '@/app/user/[id]/components/_components/Session/AnswersTransition'
import AnswersFull from '@/app/user/[id]/components/_components/Session/AnswersFull'
import AnswersShort from '@/app/user/[id]/components/_components/Session/AnswersShort'
import SessionInfo from '@/app/user/[id]/components/_components/Session/SessionInfo'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

interface IProps {
  userId: string
  session: {
    difficulty: string
    mode: string
    count: number
    playDate: string
    playerMode: string
    sessionWinnerId: string | null
    correctAnswers: Array<{
      correctAnsweredUserId: string | null
      time: number
    }>
  }
}

const Component = ({ session, userId }: IProps) => {
  return (
    <StyleWrapper style={{ cursor: 'default' }} className="text-violet-500 shadow-violet-500 shadow-lg font-extrabold border-current">
      <div className="text-white w-full">
        <Header userId={userId} time={new Date(session.playDate)} playerMode={session.playerMode} winner={session.sessionWinnerId} />
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
  )
}

export default Component
