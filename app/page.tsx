import Buttons from '@/app/components/Buttons/Component'
import Guide from '@/app/components/Guides/Guide'
import { getUser } from '@/app/utils/prismaQueries/user/getUserIdByImage'
import Heading from '@/app/components/Heading'

const Page = async () => {
  const user = await getUser()

  return (
    <div className="pt-10 sm:pt-10 select-none pb-10 flex flex-col">
      <Heading />
      <Guide />
      <Buttons id={user?.id} />
    </div>
  )
}

export default Page
