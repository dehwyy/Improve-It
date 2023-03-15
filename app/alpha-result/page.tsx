'use client'

import { FC } from 'react'
import AlphaDefaultPageWrapper from '@/app/components/UI/Wrappers/_AlphaDefaultPageWrapper'
import Statistics from '@/app/alpha-result/components/Statistics'

interface IProps {}

const Page: FC<IProps> = ({}) => {
  return (
    <div className="px-1">
      <AlphaDefaultPageWrapper className="usm:px-0 my-12 shadow-lg shadow-blue-500/100 text-blue-500 border-current">
        <Statistics />
      </AlphaDefaultPageWrapper>
    </div>
  )
}

export default Page
