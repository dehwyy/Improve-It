import { getUserById } from '@/app/utils/prismaQueries/user/getUserById'
import UserImage from '@/app/user/[id]/components/UserImage'
import UserInfoBlock from '@/app/user/[id]/components/UserInfoBlock'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'

interface IProps {
  params: {
    id: string
  }
}

const Page: (data: IProps) => Promise<JSX.Element> = async ({ params }) => {
  const data = await getUserById(params.id)
  return (
    <PageWrapper classes="py-10 mx-2 mt-5">
      <div className="w-full h-full px-5 ">
        <div className="pl-10 md:pl-0 flex gap-x-16 gap-y-8 min-h-[200px] md:flex-col">
          <UserImage image={data?.image} name={data?.name} />
          <UserInfoBlock name={data?.name as string} correct={data?.correctAnswered} total={data?.answered} />
        </div>
      </div>
    </PageWrapper>
  )
}

export default Page
