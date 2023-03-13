import { useAlphaEquationGeneratorStore } from '@/app/utils/store/alpha-equationStore'
import { shallow } from 'zustand/shallow'

interface IProps {
  children: React.ReactNode
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}
const SettingContainer: React.FC<IProps> = ({ children, setStep, step }) => {
  const [mode, difficulty, count] = useAlphaEquationGeneratorStore(state => [state.mode, state.difficulty, state.count], shallow)
  return (
    <div className="pt-12">
      {children}
      <div className="pt-16 flex gap-2 justify-between">
        <div
          onClick={() => step && setStep(p => p - 1)}
          className={`${
            step ? 'opacity-100 cursor-pointer hover:border-current' : 'text-opacity-30'
          } select-none w-[160px] text-center  py-3 shadow-orange-500/10 text-orange-500 text-xl font-extrabold px-8 rounded-lg p-4 md:p-8 transition-all bg-[#333333]  shadow-lg border-2 border-transparent`}>
          Previous
        </div>
        <div
          onClick={() => ((mode && !step) || (difficulty && count && mode)) && setStep(p => p + 1)}
          className={`${
            step === 1
              ? difficulty && count
                ? 'shadow-purple-500/10 text-purple-500 hover:border-current underline decoration-fuchsia-300 underline-offset-4 decoration-2'
                : 'text-opacity-30 shadow-purple-500/10 text-purple-500 cursor-default'
              : 'shadow-orange-500/10 text-orange-500 hover:border-current'
          } select-none w-[160px] text-center cursor-pointer py-3  text-xl font-extrabold px-8 rounded-lg p-4 md:p-8 transition-all bg-[#333333]  shadow-lg border-2 border-transparent`}>
          {step === 1 ? 'Solve It!' : 'Next'}
        </div>
      </div>
    </div>
  )
}

export default SettingContainer
