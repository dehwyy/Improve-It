import { Difficulties, Modes } from '@/types/export'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import Header from '@/app/user/[id]/components/_components/Session/Header'
import AnswersFull from '@/app/user/[id]/components/_components/Session/AnswersFull'
import SessionInfo from '@/app/user/[id]/components/_components/Session/SessionInfo'
import AnswersTransition from '@/app/user/[id]/components/_components/Session/AnswersTransition'
import AnswersShort from '@/app/user/[id]/components/_components/Session/AnswersShort'

interface IProps {
  sessions: {
    difficulty: Difficulties
    mode: Modes
    allTimeMs: number
    count: number
    day: number
    month: number
    year: number
    time: string
    isSinglePlayer: boolean
    answers: {
      isCorrect: boolean
      timeMs: number
    }[]
  }[]
  // isPrivate status
}

// isPrivateField for future
const { sessions } = {
  sessions: [
    {
      mode: 'Plus / Minus',
      allTimeMs: 100200,
      count: 10,
      difficulty: Difficulties.Impossible,
      isSinglePlayer: true,
      answers: [
        { isCorrect: true, timeMs: 11333 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
      ],
      day: 22,
      month: 3,
      year: 2023,
      time: '5:04',
    },
    {
      mode: 'Multiply',
      allTimeMs: 1313,
      count: 5,
      difficulty: Difficulties.Easy,
      isSinglePlayer: false,
      answers: [
        { isCorrect: false, timeMs: 102 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
        { isCorrect: true, timeMs: 10 },
      ],
      day: 29,
      month: 2,
      year: 2022,
      time: '6:04',
    },
  ],
} as IProps

const Sessions = () => {
  return (
    <div className="flex flex-col gap-y-7 w-5/6 md:w-full mx-auto">
      {sessions.map(session => (
        <StyleWrapper className="text-blue-500 shadow-blue-500 shadow-lg font-extrabold border-current">
          <div className="text-white w-full">
            <Header day={session.day} month={session.month} year={session.year} time={session.time} isSinglePlayer={session.isSinglePlayer} />
            <div className="w-full grid grid-cols-2 lg:flex md:flex-col-reverse lg:gap-x-5 text-xl gap-y-8 py-5">
              <div className=" sm:w-full w-2/3 mx-auto flex flex-col gap-y-5">
                <AnswersTransition full={<AnswersFull answers={session.answers} />}>
                  <AnswersShort answers={session.answers} />
                </AnswersTransition>
              </div>
              <div className="w-2/3 sm:w-full mx-auto">
                <SessionInfo mode={session.mode} difficulty={session.difficulty} time={session.allTimeMs} />
              </div>
            </div>
          </div>
        </StyleWrapper>
      ))}
    </div>
  )
}

export default Sessions
