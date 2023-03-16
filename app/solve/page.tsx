'use client'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import SolveStepper from '@/app/solve/_components/SolveStepper'
import { useEffect, useRef, useState } from 'react'
import SelectSolveMode from '@/app/solve/_components/SelectSolveMode'
import SelectSetupSolve from '@/app/solve/_components/SelectSetupSolve'
import SelectLayout from '@/app/solve/_components/SelectLayout'
import SolveTransition from '@/app/solve/_components/SolveTransition'
import { useEquationStore } from '@/app/utils/store/equationStore'

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const setEquationStore = useEquationStore(state => state.initializeAnswers)
  useEffect(() => setEquationStore(0))
  return (
    <PageWrapper classes="mt-12 sm:mt-6">
      <SolveStepper currentStep={currentStep} />
      <SolveTransition currentStep={currentStep}>
        <SelectLayout setStep={setCurrentStep} step={currentStep}>
          {currentStep ? <SelectSetupSolve /> : <SelectSolveMode />}
        </SelectLayout>
      </SolveTransition>
    </PageWrapper>
  )
}

export default Page
