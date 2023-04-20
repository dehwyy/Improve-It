import { getUserById } from '@/app/utils/prismaQueries/user/getUserById'
import Capitalized from '@/app/utils/tools/functions/Capitalize'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import Nickname from '@/app/user/[id]/edit/fields/Nickname'
import InitialValuesSetter from '@/app/user/[id]/edit/_components/InitialValuesSetter'
import { UserChangeableValues } from '@/app/utils/store/editUserInfoStore'
import Description from '@/app/user/[id]/edit/fields/Description'
import { getUserNotById } from '@/app/utils/prismaQueries/user/getUserNotById'
import { Admin } from '@/types/export'
import { redirect } from 'next/navigation'

interface IProps {
  params: {
    id: string
  }
}

async function validateHasAccessToEdit(id: string) {
  const sessionUserId = await getUserNotById()
  if (!(sessionUserId!.id == Admin.id || sessionUserId!.id == id)) {
    redirect(`/user/${id}`)
  }
}

const Page = async ({ params }: IProps) => {
  await validateHasAccessToEdit(params.id)
  const user = await getUserById(params.id)
  if (!user) return <></>
  const { nickname, description } = {
    nickname: user.nickname || user.name,
    description: user.description,
  } as UserChangeableValues<string>
  return (
    <PageWrapper classes="gap-y-5 max-w-[600px] mx-auto">
      <div>
        <div className="bg-[#222222] rounded-t-xl p-4 font-[500]">{Capitalized(user.nickname || (user.name as string))}'s profile</div>
        <div className="border-[#222222] border-r-4 border-l-4 h-[100px] w-full bg-[#444444]"></div>
        <div className="flex flex-col items-center p-2 bg-[#222222] rounded-b-xl">
          <img className="rounded-full relative top-[-20px]" src={user.image as string} height="100px" width="100px" alt="image" />
          <Nickname name={nickname} />
        </div>
      </div>
      <div>
        <div className="bg-[#222222] rounded-xl px-4 py-4 sm:px-0 flex flex-col">
          <span className="text-gray-300 text-center">Short Information</span>
          <Description />
        </div>
      </div>
      <InitialValuesSetter nickname={nickname} description={description} />
    </PageWrapper>
  )
}

export default Page
