import { Step, StepButton, Stepper, useMediaQuery } from '@mui/material'
import useFieldsByLanguage from '@/app/utils/hooks/GlobalHooks/useFieldsByLanguage'
import solveLanguages from '@/app/solve/edit/_components/solveLang'
import { Mulish } from '@next/font/google'

const pFont = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

interface IProps {
  currentStep: number
}

const SolveStepper: React.FC<IProps> = ({ currentStep }) => {
  const language = useFieldsByLanguage(solveLanguages)
  const matches = useMediaQuery('(max-width:639px)')
  return (
    <div className="w-3/4 mx-auto sm:w-full" data-testid="solve_stepper">
      <Stepper activeStep={currentStep} orientation={matches ? 'vertical' : 'horizontal'} className="p-2">
        <Step>
          <StepButton>
            <p className={`${pFont.className} text-white sm:text-2xl text-[1rem] font-bold`}>{language.step1}</p>
          </StepButton>
        </Step>
        <Step>
          <StepButton sx={{ color: 'white' }}>
            <p className={`${pFont.className} text-white sm:text-2xl text-[1rem] font-bold`}>{language.step2}</p>
          </StepButton>
        </Step>
      </Stepper>
    </div>
  )
}

export default SolveStepper
