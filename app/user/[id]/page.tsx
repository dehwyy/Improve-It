import { getUserById } from '@/app/utils/prismaQueries/user/getUserById'
import UserImage from '@/app/user/[id]/components/UserImage'
import UserInfoBlock from '@/app/user/[id]/components/UserInfoBlock'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import { getUserSession } from '@/app/utils/prismaQueries/user/getUserSession'
import VirtualScrollWrapper from '@/app/user/[id]/components/VirtualScrollWrapper'

interface IProps {
  params: {
    id: string
  }
}

interface ISession {
  session: {
    difficulty: string
    mode: string
    count: number
    playDate: string
    playerMode: string
    sessionWinnerId: string | null
    correctAnswers: {
      correctAnsweredUserId: string | null
      time: number
    }[]
  }
}

const Page: (data: IProps) => Promise<JSX.Element> = async ({ params }) => {
  const data = await getUserById(params.id)
  const sessions = await getUserSession(params.id)
  return (
    <PageWrapper classes="py-10 mx-2 mt-5">
      <div className="pl-10 md:pl-0 flex flex-col gap-y-10">
        <div className="flex gap-x-16 gap-y-8 min-h-[200px] md:flex-col">
          <UserImage image={data?.image} name={data?.name} />
          <UserInfoBlock name={data?.name as string} correct={data?.correctAnswers.length} total={data?.answered} />
        </div>
        <VirtualScrollWrapper sessions={sessions.reverse() as unknown as ISession[]} userId={data?.id as string} />
      </div>
    </PageWrapper>
  )
}

export default Page
