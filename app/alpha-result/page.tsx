'use client'

import { FC } from 'react'
import AlphaDefaultPageWrapper from '@/app/components/UI/Wrappers/_AlphaDefaultPageWrapper'
import Statistics from '@/app/alpha-result/components/Statistics'

interface IProps {}

const Page: FC<IProps> = ({}) => {
  return (
    <AlphaDefaultPageWrapper className="mt-12 shadow-blue-500/100 text-blue-500 border-current">
      <Statistics />
    </AlphaDefaultPageWrapper>
  )
}

export default Page
