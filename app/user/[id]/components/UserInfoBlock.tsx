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
}
const UserInfoBlock = ({ pageUserId, name, description, total = 0, correct = 0 }: IProps) => {
  return (
    <StyleWrapper
      style={{ cursor: 'default', padding: '0px' }}
      data-testid="user-info"
      className="shadow-lg font-extrabold border-current shadow-red-500/100 text-red-500 min-w-[200px] flex-auto mr-10 md:mr-0 relative">
      <div className="p-5 text-center flex w-full flex-col text-white cursor-default">
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
        <LinkToEditPage pageUserId={pageUserId} />
      </div>
    </StyleWrapper>
  )
}

export default UserInfoBlock
