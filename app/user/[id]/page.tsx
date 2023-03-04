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
    <div className="py-10 bg-white md:black md:bg-transparent block-neo-style mx-2 mt-5">
      <div className="w-full h-full px-5 ">
        <div className="pl-10 md:pl-0 flex gap-x-16 gap-y-8 min-h-[200px] md:flex-col">
          <div className="block-neo-style self-center uusm:min-w-[200px] uusm:min-h-[200px] min-w-[250px] min-h-[250px] bg-[#444444]">
            <img className="rounded-xl uusm:w-[200px] uusm:h-[200px] w-[250px] h-[250px]" src={data?.image as string} alt={data?.name as string} />
          </div>
          <div className="block-neo-style min-w-[200px] bg-[#444444] md:bg-[#555555] flex-auto mr-10 md:mr-0">
            <div className="p-5 text-center flex flex-col gap-y-5 text-white">
              <div>
                <h2 className={`${h1Font.className} uusm:text-2xl text-3xl underline underline-offset-4`}>{data?.name as string}</h2>
              </div>
              <div>
                <h2 className={`${h2Font.className} uusm:text-xl text-2xl pb-2`}>Correct Answers</h2>
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
