'use client'
import DefaultPageWrapper from '@/app/components/UI/Wrappers/DefaultPageWrapper'
import SolveStepper from '@/app/alpha-solve/_components/SolveStepper'
import { useState } from 'react'
import SelectSolveMode from '@/app/alpha-solve/_components/SelectSolveMode'
import SelectSetupSolve from '@/app/alpha-solve/_components/SelectSetupSolve'
import SettingContainer from '@/app/alpha-solve/_components/SettingContainer'

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  return (
    <DefaultPageWrapper>
      <SolveStepper currentStep={currentStep} />
      <SettingContainer setStep={setCurrentStep} step={currentStep}>
        {currentStep ? <SelectSetupSolve /> : <SelectSolveMode />}
      </SettingContainer>
    </DefaultPageWrapper>
  )
}

export default Page
