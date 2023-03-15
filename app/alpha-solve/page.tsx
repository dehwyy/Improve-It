'use client'
import DefaultPageWrapper from '@/app/components/UI/Wrappers/DefaultPageWrapper'
import SolveStepper from '@/app/alpha-solve/_components/SolveStepper'
import { useState } from 'react'
import SelectSolveMode from '@/app/alpha-solve/_components/SelectSolveMode'
import SelectSetupSolve from '@/app/alpha-solve/_components/SelectSetupSolve'
import SelectLayout from '@/app/alpha-solve/_components/SelectLayout'

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  return (
    <DefaultPageWrapper>
      <SolveStepper currentStep={currentStep} />
      <SelectLayout setStep={setCurrentStep} step={currentStep}>
        {currentStep ? <SelectSetupSolve /> : <SelectSolveMode />}
      </SelectLayout>
    </DefaultPageWrapper>
  )
}

export default Page
