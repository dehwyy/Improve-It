import StatsHeading from '@/app/user/[id]/StatsHeading'
import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import Answers from '@/app/components/UI/Global/Stats/Answers'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import { Mulish } from '@next/font/google'

const h2Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

interface IProps {
  name: string
  correct?: number
  total?: number
}
const UserInfoBlock = ({ name, total = 0, correct = 0 }: IProps) => {
  return (
    <StyleWrapper className="shadow-lg font-extrabold border-current shadow-red-500/100 text-red-500 min-w-[200px] flex-auto mr-10 md:mr-0">
      <div className="p-5 text-center flex w-full flex-col gap-y-5 text-white">
        <div>
          <h2 className={`${h2Font.className} uusm:text-2xl text-3xl underline underline-offset-4`}>{name}</h2>
        </div>
        <div>
          <StatsHeading />
          <ProgressBar correctCount={correct} count={total} />
          <div className="pt-2">
            <Answers count={total} correctCount={correct} />
          </div>
        </div>
      </div>
    </StyleWrapper>
  )
}

export default UserInfoBlock
