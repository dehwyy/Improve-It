import Link from 'next/link'
import { Mulish } from '@next/font/google'
import { useUserStore } from '@/app/utils/store/globalStore'
import LeaderboardUserPlace from '@/app/leaderboard/components/_components/LeaderboardUserPlace'
const h3Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})
interface IProps {
  id: string
  place?: number
  name: string
  image: string
  correctAnswered: number
  answered: number
}
const LeaderboardUser = ({ answered, correctAnswered, id, place, image, name }: IProps) => {
  const currentUserId = useUserStore(state => state.userId)
  return (
    <Link href={`/user/${id}`} className="cursor-pointer">
      <div
        data-testid="leaderboard-item"
        className={`${
          currentUserId === id
            ? 'border-green-500  shadow-green-500/100 text-green-500'
            : 'border-black border-current  shadow-blue-500/100 text-blue-500'
        }  select-none rounded-lg p-4 transition-all duration-500 bg-[#333333] shadow-lg border-2 hover:border-red-500 hover:text-red-500 hover:shadow-red-500/100 w-full`}>
        <div className="p-5">
          <div className="flex sm:items-stretch items-center gap-y-5 sm:flex-col w-[100%] justify-between">
            <div className="flex vsm:flex-col gap-y-2 gap-x-5 items-center justify-center">
              <div className="text-4xl text-center mr-5 sm:mr-0">
                <LeaderboardUserPlace place={place} />
              </div>
              <div className="w-[70px] h-[70px]">
                <img className="w-full h-full rounded-md" src={image || '/images/profile_image.jpg'} alt="profile image" />
              </div>
              <h3 className={`${h3Font.className} text-3xl text-center`}>{name}</h3>
            </div>
            <div className="text-xl px-5 py-2 rounded-md text-yellow-500 shadow-yellow-500/100 border-current border-2 shadow-sm flex justify-center">
              <span className="text-green-500">{correctAnswered}</span>&nbsp;/&nbsp;
              <span className="text-red-500">{answered - correctAnswered}</span>&nbsp;/&nbsp;
              <span className="text-sky-400">{Math.ceil((correctAnswered / answered) * 100) | 0}%</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default LeaderboardUser
