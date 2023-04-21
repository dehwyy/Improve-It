import { getUserById } from '@/app/utils/prismaQueries/user/getUserById'
import UserImage from '@/app/user/[id]/components/UserImage'
import UserInfoBlock from '@/app/user/[id]/components/UserInfoBlock'
import PageWrapper from '@/app/components/UI/Wrappers/PageWrapper'
import { getUserSession } from '@/app/utils/prismaQueries/user/getUserSession'
import VirtualScrollWrapper from '@/app/user/[id]/components/VirtualScrollWrapper'
import { getUserNotById } from '@/app/utils/prismaQueries/user/getUserNotById'
import NoSession from '@/app/user/[id]/components/NoSession'
import SessionHeading from '@/app/user/[id]/components/SessionHeading'
import { getUserNicknames } from '@/app/utils/prismaQueries/user/getUserNicknames'

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

export async function generateMetadata({ params }: { params: { id: string } }) {
  const user = await getUserById(params.id)

  return {
    title: user?.name || 'page',
  }
}

const Page: (data: IProps) => Promise<JSX.Element> = async ({ params }) => {
  const [data, sessions, previousNames] = await Promise.all([getUserById(params.id), getUserSession(params.id), getUserNicknames(params.id)])
  return (
    <PageWrapper classes="py-10 mx-2 mt-5">
      <div className="pl-10 md:pl-0 flex flex-col gap-y-10">
        <div className="flex gap-x-16 gap-y-8 min-h-[200px] md:flex-col">
          <UserImage image={data?.profilePicture || data?.image} name={data?.name} />
          <UserInfoBlock
            name={data?.nickname || (data?.name as string)}
            description={data?.description}
            pageUserId={params.id}
            correct={data?.correctAnsweredCount}
            total={data?.answered}
          />
        </div>
        <SessionHeading totalSession={sessions.length} />
        {sessions.length ? (
          <VirtualScrollWrapper sessions={sessions.reverse() as unknown as ISession[]} userId={data?.id as string} />
        ) : (
          <NoSession />
        )}
      </div>
    </PageWrapper>
  )
}

export default Page
