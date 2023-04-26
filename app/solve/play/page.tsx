'use client'
import { useEquationAnimationStore } from '@/app/utils/store/equationStore'
import SingleEquation from '@/app/solve/play/components/SingleEquation'
import Redirect from '@/app/solve/play/components/components/Redirect'
import Loader from '@/app/components/UI/Global/Loader'
import MobileKeyboard from '@/app/solve/play/components/MobileKeyboard'
import useEquationGenerator from '@/app/utils/hooks/EquationHooks/useEquationGenerator'

const Page = () => {
  const isAnimation = useEquationAnimationStore(state => state.isAnimation)
  const { equation, correctAnswer, isInvalid } = useEquationGenerator()
  if (isInvalid) return <Redirect />
  return equation ? (
    <div className="pt-10 sm:pt-5 w-[80%] sm:w-[92%] vsm:w-full mx-auto text-center text-white relative">
      <SingleEquation equation={equation} correctAnswer={correctAnswer as number} />
      <MobileKeyboard isAnimation={isAnimation} />
    </div>
  ) : (
    <Loader />
  )
}

export default Page
