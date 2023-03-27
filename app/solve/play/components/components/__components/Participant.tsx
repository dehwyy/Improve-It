import useSWR, { Fetcher } from 'swr'
import { ApiRoutes } from '@/types/routes'
import SmallLoader from '@/app/components/UI/Global/SmallLoader'
import { useRouter } from 'next/navigation'
import { Skeleton } from '@mui/material'
interface IProps {
  player: {
    id: string | ' bot'
  }
}

interface UserInfo {
  name: string
  image?: string
  id?: string
}

const fetcher: Fetcher<{ user: UserInfo }, string> = route => fetch(route).then(res => res.json())

const Participant = ({ player }: IProps) => {
  const router = useRouter()
  let { data, isLoading, error } = useSWR(`${ApiRoutes.getUserById}/${player.id}`, fetcher)
  if (isLoading) return <Skeleton height={50} />
  if (error || !data?.user) return <></>
  const { id, name, image } = data.user
  if (id) router.prefetch(`/user/${id}`)
  return data && data.user ? (
    <LinkWrapper id={id}>
      <div className={`${id && 'cursor-pointer'} w-[300px] flex gap-2 items-center mx-auto pl-[2rem] usm:w-full`}>
        <img className="rounded-md" src={image} alt={name} width="40" height="40" />
        <p className="hover:text-red-500 font-bold transition-all duration-300">{name}</p>
      </div>
    </LinkWrapper>
  ) : (
    <></>
  )
}

const LinkWrapper = ({ id, children }: { id?: string; children: React.ReactNode }) => {
  return id ? (
    <a href={id && `/user/${id}`} target="_blank">
      {children}
    </a>
  ) : (
    <>{children}</>
  )
}

export default Participant
