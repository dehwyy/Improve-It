'use client'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import SelectGameType from '@/app/solve/_components/SelectGameType'

const Page = () => {
  return (
    <PageWrapper classes="pb-24">
      <SelectGameType />
    </PageWrapper>
  )
}

export default Page
