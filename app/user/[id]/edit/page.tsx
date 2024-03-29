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
import ProfileImage from '@/app/user/[id]/edit/fields/ProfileImage'
import ProfileBackground from '@/app/user/[id]/edit/fields/ProfileBackground'

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
  const { nickname, description, img, backgroundImg } = {
    nickname: user.nickname || user.name,
    description: user.description,
    img: user.profilePicture || user.image,
    backgroundImg: user.profileBackground || '',
  } as UserChangeableValues<string>
  return (
    <PageWrapper classes="gap-y-5 max-w-[800px] mx-auto">
      <div>
        <div className="bg-[#222222] rounded-t-xl p-4 font-[500]">{Capitalized(user.nickname || (user.name as string))}&apos;s profile</div>
        <ProfileBackground img={backgroundImg} />
        <div className="flex flex-col items-center p-2 bg-[#222222] rounded-b-xl">
          <ProfileImage img={img} />
          <Nickname name={nickname} />
        </div>
      </div>
      <div>
        <div className="bg-[#222222] rounded-xl px-4 py-4 sm:px-0 flex flex-col">
          <span className="text-gray-300 text-center">Short Information</span>
          <Description />
        </div>
      </div>
      <InitialValuesSetter nickname={nickname} description={description} img={img} backgroundImg={backgroundImg} />
    </PageWrapper>
  )
}

export default Page
