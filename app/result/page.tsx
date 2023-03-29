import Statistics from '@/app/result/components/Statistics'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Game results',
}

const Page = () => {
  return (
    <PageWrapper classes="px-1">
      <Statistics />
    </PageWrapper>
  )
}

export default Page
