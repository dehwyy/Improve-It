'use client'
import Link from 'next/link'
import { useUserStore } from '@/app/utils/store/globalStore'

interface IProps {
  pageUserId: string
}

const LinkToEditPage = ({ pageUserId }: IProps) => {
  const sessionUserId = useUserStore(state => state.userId)
  return sessionUserId == pageUserId ? (
    <div className="text-center py-2 bg-[#444444] rounded-xl my-4">
      <Link href={`/user/${pageUserId}/edit`} className="w-ful">
        <p className="text-xl text-gray-300 font-medium">Edit</p>
      </Link>
    </div>
  ) : (
    <></>
  )
}

export default LinkToEditPage
