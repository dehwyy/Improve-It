import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import SelectGameType from '@/app/solve/_components/SelectGameType'
import { getUserNotById } from '@/app/utils/prismaQueries/user/getUserNotById'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Selecting game...',
}

const Page = async () => {
  const user = await getUserNotById()
  return (
    <PageWrapper classes="pb-24">
      <SelectGameType userId={user?.id as string} />
    </PageWrapper>
  )
}

export default Page
