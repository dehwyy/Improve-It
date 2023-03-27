import { useEquationSettingsStore } from '@/app/utils/store/equationStore'
import { shallow } from 'zustand/shallow'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import Loader from '@/app/components/UI/Global/Loader'
import { useInputStore } from '@/app/utils/store/inputStore'

interface IProps {
  children: React.ReactNode
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}
const SettingContainer: React.FC<IProps> = ({ children, setStep, step }) => {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const [mode, difficulty, count] = useEquationSettingsStore(state => [state.mode, state.difficulty, state.count], shallow)
  const setKey = useInputStore(state => state.setPressedKey)

  const backHandler = useCallback(() => {
    if (!step) return
    window.scrollTo(0, 175)
    setStep(p => p - 1)
  }, [step])

  const forwardHandler = useCallback(() => {
    if (mode && !step) {
      setStep(p => p + 1)
      window.scrollTo(0, 175)
    } else if (difficulty && count && mode && step === 1) {
      setKey(null)
      setLoading(true)
      router.push('/solve/play')
    }
  }, [step, mode, difficulty, count])

  if (isLoading) return <Loader />

  return (
    <div className="pt-7">
      {children}
      <div className="pt-16 flex gap-2 gap-y-4 justify-between sm:flex-col-reverse sm:w-full">
        <div
          onClick={backHandler}
          className={`${
            step ? 'opacity-100 cursor-pointer hover:border-current' : 'text-opacity-30'
          } select-none min-w-[160px] text-center py-3 shadow-orange-500/30 text-orange-500 text-xl font-extrabold px-8 rounded-lg p-4 transition-all bg-[#333333]  shadow-lg border-2 sm:border-current border-transparent`}>
          Back
        </div>
        <div
          onClick={forwardHandler}
          className={`${
            step === 1
              ? difficulty && count
                ? 'shadow-purple-500/30 text-purple-500 hover:border-current underline decoration-fuchsia-300 underline-offset-4 decoration-2 cursor-pointer'
                : 'text-opacity-30 shadow-purple-500/10 text-purple-500'
              : mode
              ? 'shadow-orange-500/30 text-orange-500 hover:border-current cursor-pointer'
              : 'shadow-orange-500/30 text-orange-500 text-opacity-30'
          } select-none min-w-[160px] text-center py-3 text-xl font-extrabold px-8 rounded-lg p-4 transition-all bg-[#333333] shadow-lg border-2 sm:border-current border-transparent`}>
          {step === 1 ? 'Solve It!' : 'Next'}
        </div>
      </div>
    </div>
  )
}

export default SettingContainer
