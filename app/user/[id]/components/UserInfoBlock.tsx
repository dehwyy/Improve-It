import StatsHeading from '@/app/user/[id]/components/_components/UserInfo/StatsHeading'
import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import Answers from '@/app/components/UI/Global/Stats/Answers'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import { Mulish } from 'next/font/google'
import Nickname from '@/app/user/[id]/components/_components/UserInfo/Nickname'
import LinkToEditPage from '@/app/user/[id]/components/LinkToEditPage'
import Description from '@/app/user/[id]/components/_components/UserInfo/Description'

const h2Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

interface IProps {
  correct?: number
  pageUserId: string
  total?: number
  name: string
  description?: string | null
  backgroundImage: string | null | undefined
  children: React.ReactNode
}
const UserInfoBlock = ({ pageUserId, name, description, children, backgroundImage, total = 0, correct = 0 }: IProps) => {
  return (
    <div className="relative px-5 py-5 lg:px-2 shadow-lg font-extrabold border-2 border-blue-500 shadow-blue-500 min-w-[200px] grid lg:grid-cols-1 grid-cols-4 place-items-center w-full">
      <div className={`${backgroundImage && 'absolute left-8 top-[-8rem] lg:static lg:mt-[-5rem] sm:mt-[-3rem] usm:mt-[-2rem]'} `}>{children}</div>
      <div className={`${backgroundImage ? 'col-span-4' : 'col-span-3'} w-[90%] lg:col-span-1`}>
        <div className="p-5 sm:p-1 text-center flex w-full flex-col text-white cursor-default">
          <div className="pb-5 select-text">
            <h2 className={`${h2Font.className} `}>
              <p className={`${h2Font.className} w-full p-1 text-center sm:text-[1.5rem] text-4xl underline underline-offset-4`}>
                <Nickname name={name} />
              </p>
              <p className={`w-full ${description && 'pt-3'} text-lg`}>
                <Description description={description} />
              </p>
            </h2>
          </div>
          <div>
            <StatsHeading />
            <ProgressBar correctCount={correct} count={total} />
            <div className="pt-2">
              <Answers count={total} correctCount={correct} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full col-span-4 lg:col-span-1">
        <LinkToEditPage pageUserId={pageUserId} />
      </div>
    </div>
  )
}

export default UserInfoBlock
