import StatsHeading from '@/app/user/[id]/components/_components/UserInfo/StatsHeading'
import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import Answers from '@/app/components/UI/Global/Stats/Answers'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import Nickname from '@/app/user/[id]/components/_components/UserInfo/Nickname'

interface IProps {
  name: string
  userId: string
  currentUserId?: string
  correct?: number
  total?: number
}
const UserInfoBlock = ({ name, total = 0, correct = 0, userId, currentUserId }: IProps) => {
  return (
    <StyleWrapper
      style={{ cursor: 'default' }}
      data-testid="user-info"
      className="shadow-lg font-extrabold border-current shadow-red-500/100 text-red-500 min-w-[200px] flex-auto mr-10 md:mr-0">
      <div className="p-5 text-center flex w-full flex-col text-white cursor-default">
        <Nickname name={name} />
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
