import { FC } from 'react'
import Link from 'next/link'
import { Varela_Round } from '@next/font/google'
const h3Font = Varela_Round({
  subsets: ['latin'],
  weight: '400',
})
interface IProps {
  id: string
  name: string
  image: string
  correctAnswered: number
  answered: number
  currentUserImage?: string | null
}
const LeaderboardUser: FC<IProps> = ({ answered, correctAnswered, id, image, name, currentUserImage }) => {
  return (
    <Link href={`/user/${id}`} className="cursor-pointer">
      <div className={`${currentUserImage === image ? 'border-green-600' : 'border-black'} w-full bg-white rounded-2xl border-2`}>
        <div className="p-5">
          <div className="flex sm:items-stretch items-center gap-y-5 sm:flex-col w-[100%] justify-between">
            <div className="flex gap-x-5 items-center justify-center">
              <div className="w-[70px] h-[70px]">
                <img className="w-full h-full" src={image || '/images/profile_image.jpg'} alt="profile image" />
              </div>
              <h3 className={`${h3Font.className} text-3xl`}>{name}</h3>
            </div>
            <div className="text-xl text-white bg-[#555555] px-5 py-2 block-neo-style flex justify-center">
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
