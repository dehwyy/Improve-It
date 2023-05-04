import useSWR from 'swr'
import { ApiRoutesUser } from '@/types/routes'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@mui/material'
import getFetcher from '@/app/utils/global/getFetcher'
import Image from 'next/image'
interface IProps {
  player: {
    id: string | ' bot'
  }
}

interface UserInfo {
  user: {
    profilePicture?: string
    name: string
    image?: string
    id?: string
  }
}

const Participant = ({ player }: IProps) => {
  const router = useRouter()
  let { data, isLoading, error } = useSWR(`${ApiRoutesUser.getUserById}/${player.id}`, getFetcher<UserInfo>())
  if (isLoading) return <Skeleton height={50} />
  if (error || !data?.user) return <></>
  const { id, name, image, profilePicture } = data.user
  if (id) router.prefetch(`/user/${id}`)
  return (
    <LinkWrapper id={id}>
      <div className={`${id && 'cursor-pointer'} w-[300px] flex gap-2 items-center mx-auto pl-[2rem] usm:w-full`}>
        <Image
          width="150"
          height="150"
          quality={100}
          className="rounded-md w-[40px] h-[40px] object-cover object-top"
          src={profilePicture || image || '/images/profile_image.jpg'}
          alt={name}
        />
        <p className="hover:text-red-500 font-bold transition-all duration-300">{name}</p>
      </div>
    </LinkWrapper>
  )
}

const LinkWrapper = ({ id, children }: { id?: string; children: React.ReactNode }) => {
  return id ? (
    <a href={id && `/user/${id}`} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <>{children}</>
  )
}

export default Participant
