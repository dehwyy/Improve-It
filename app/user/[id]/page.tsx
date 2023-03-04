import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import { Varela_Round, Ubuntu } from '@next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import prisma from '@/prisma/client'
import { Modes } from '@/types/export'
import { getUserById } from '@/app/utils/prismaQueries/getUserById'
import Answers from '@/app/components/UI/Global/Stats/Answers'

const h1Font = Ubuntu({
  subsets: ['latin'],
  weight: '400',
})

const h2Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})

interface IProps {
  params: {
    id: string
  }
}

const Page: (data: IProps) => Promise<JSX.Element> = async ({ params }) => {
  const data = await getUserById(params.id)
  return (
    <div className="pt-10 pb-10 bg-white block-neo-style min-w-[600px]">
      <div className="w-full h-full px-5">
        <div className="pl-10 flex gap-x-16 min-h-[200px]">
          <div className="block-neo-style self-center min-w-[250px] min-h-[250px] bg-[#444444]">
            <img className="rounded-xl" src={data?.image as string} alt={data?.name as string} width="250" height="250" />
          </div>
          <div className="block-neo-style min-w-[200px] bg-[#444444] flex-auto mr-10">
            <div className="p-5 text-center flex flex-col gap-y-5 text-white">
              <div>
                <h2 className={`${h1Font.className} text-3xl underline underline-offset-4`}>{data?.name as string}</h2>
              </div>
              <div>
                <h2 className={`${h2Font.className} text-2xl pb-2`}>Correct Answers</h2>
                <ProgressBar correctCount={data?.correctAnswered as number} count={data?.answered as number} />
                <div className="pt-2">
                  <Answers count={data?.answered as number} correctCount={data?.correctAnswered as number} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
