import { useEquationAnimationStore } from '@/app/utils/store/equationStore'
import SuccessAnimation from '@/app/solve/play/components/components/SuccessAnimation'
import { Gothic_A1 } from 'next/font/google'
import { useGameTypeStore } from '@/app/utils/store/gameTypeStore'
import Participants from '@/app/solve/play/components/components/Participants'
import useEquationKeyboard from '@/app/utils/hooks/EquationHooks/useEquationKeyboard'
import useLobby from '@/app/utils/hooks/EquationHooks/useLobby'
import useBotTime from '@/app/utils/hooks/BotHooks/useBotTime'
import useTimeout from '@/app/utils/hooks/GlobalHooks/useTimeout'
import { useEffect } from 'react'
import Pages from '@/app/solve/play/components/components/Pages'

const mathFont = Gothic_A1({
  subsets: ['latin'],
  weight: '700',
})

interface IProps {
  correctAnswer: number
  equation: string
}

const SingleEquation = ({ correctAnswer, equation }: IProps) => {
  const selectedGameType = useGameTypeStore(state => state.gameType)
  const isAnimation = useEquationAnimationStore(state => state.isAnimation)
  const { inputValue, setInputValue, keyupHandler, isMobile, enterHasBeenPressed } = useEquationKeyboard({ correctAnswer })
  const { isDone } = useBotTime()
  const { currentUserId, answeredUserId } = useLobby({ inputValue, setInputValue, correctAnswer, botIsDone: isDone })
  return !isAnimation ? (
    <>
      <Pages />
      {selectedGameType != 'Solo' && <Participants />}
      <div className={`${mathFont.className} text-5xl w-full vsm:w-[92%] vsm:mx-auto`}>{equation}?</div>
      <div className="pt-12 sm:pb-2 sm:pt-2 my-5">
        <input
          value={inputValue}
          onChange={setInputValue}
          onKeyUp={keyupHandler}
          autoFocus={!isMobile}
          className="border-0 max-w-[95%] mx-auto bg-transparent focus-visible:outline-0 text-8xl premd:text-6xl vsm:text-[2.8rem] text-center w-full"
        />
      </div>
    </>
  ) : (
    <div className="pt-12 ">
      <SuccessAnimation isSuccess={selectedGameType === 'Solo' ? !enterHasBeenPressed : currentUserId == answeredUserId} />
    </div>
  )
}

export default SingleEquation
