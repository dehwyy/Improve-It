import Buttons from '@/app/components/Buttons/Component'
import Guide from '@/app/components/Guides/Guide'
import { getUserNotById } from '@/app/utils/prismaQueries/user/getUserNotById'
import Heading from '@/app/components/Heading'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'

const Page = async () => {
  const user = await getUserNotById()

  return (
    <PageWrapper classes="py-10 select-none">
      <Heading />
      <Guide />
      <Buttons id={user?.id} />
    </PageWrapper>
  )
}

export default Page
