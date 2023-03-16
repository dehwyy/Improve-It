import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import { Ubuntu } from '@next/font/google'
import { getUserById } from '@/app/utils/prismaQueries/user/getUserById'
import Answers from '@/app/components/UI/Global/Stats/Answers'
import StatsHeading from '@/app/user/[id]/StatsHeading'
import AlphaStyleWrapper from '@/app/components/UI/Wrappers/_AlphaPageWrapper'
const h1Font = Ubuntu({
  subsets: ['latin', 'cyrillic'],
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
    <div className="py-10 mx-2 mt-5">
      <div className="w-full h-full px-5 ">
        <div className="pl-10 md:pl-0 flex gap-x-16 gap-y-8 min-h-[200px] md:flex-col">
          <div className="block-neo-style self-center uusm:min-w-[200px] uusm:min-h-[200px] min-w-[250px] min-h-[250px] bg-[#333333]">
            <img
              className="rounded-xl uusm:w-[200px] uusm:h-[200px] w-[250px] h-[250px]"
              src={(data?.image as string) || '/images/profile_image.jpg'}
              alt={data?.name as string}
            />
          </div>
          <AlphaStyleWrapper classes="shadow-lg font-extrabold border-current shadow-red-500/100 text-red-500 min-w-[200px] flex-auto mr-10 md:mr-0">
            <div className="p-5 text-center flex w-full flex-col gap-y-5 text-white">
              <div>
                <h2 className={`${h1Font.className} uusm:text-2xl text-3xl underline underline-offset-4`}>{data?.name as string}</h2>
              </div>
              <div>
                <StatsHeading />
                <ProgressBar correctCount={data?.correctAnswered as number} count={data?.answered as number} />
                <div className="pt-2">
                  <Answers count={data?.answered as number} correctCount={data?.correctAnswered as number} />
                </div>
              </div>
            </div>
          </AlphaStyleWrapper>
        </div>
      </div>
    </div>
  )
}

export default Page
