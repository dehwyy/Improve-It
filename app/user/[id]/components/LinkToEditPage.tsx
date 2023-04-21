'use client'
import Link from 'next/link'
import { useUserStore } from '@/app/utils/store/globalStore'

interface IProps {
  pageUserId: string
}

const LinkToEditPage = ({ pageUserId }: IProps) => {
  const sessionUserId = useUserStore(state => state.userId)
  return sessionUserId == pageUserId ? (
    <Link href={`/user/${pageUserId}/edit`} className="mt-12 py-2 bg-[#444444] rounded-xl w-full mx-auto">
      <p className="text-xl text-gray-300 font-medium">Edit</p>
    </Link>
  ) : (
    <></>
  )
}

export default LinkToEditPage
