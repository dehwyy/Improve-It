import type { FC } from 'react'
import Statistics from '@/app/result/components/Statistics'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'

interface IProps {}

const Page: FC<IProps> = ({}) => {
  return (
    <PageWrapper classes="px-1">
      <Statistics />
    </PageWrapper>
  )
}

export default Page
