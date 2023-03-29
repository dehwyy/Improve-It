'use client'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import SolveStepper from '@/app/solve/edit/_components/SolveStepper'
import { useState } from 'react'
import SelectSolveMode from '@/app/solve/edit/_components/SelectSolveMode'
import SelectSetupSolve from '@/app/solve/edit/_components/SelectSetupSolve'
import SelectLayout from '@/app/solve/edit/_components/SelectLayout'
import SolveTransition from '@/app/solve/edit/_components/SolveTransition'
import useClearEquationStores from '@/app/utils/hooks/EquationHooks/useClearEquationStores'

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  useClearEquationStores()
  return (
    <PageWrapper classes="mt-12 sm:mt-6">
      <SolveStepper currentStep={currentStep} />
      <SolveTransition currentStep={currentStep}>
        <SelectLayout setStep={setCurrentStep} step={currentStep}>
          <StepPage currentPage={currentStep} />
        </SelectLayout>
      </SolveTransition>
    </PageWrapper>
  )
}

const StepPage = ({ currentPage }: { currentPage: number }) => {
  switch (currentPage) {
    case 0:
      return <SelectSolveMode />
    default:
      return <SelectSetupSolve />
  }
}

export default Page
