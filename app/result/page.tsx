import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import { FC, useMemo } from 'react'
import CustomButton from '@/app/components/UI/Global/CustomButton'
import Link from 'next/link'
import { getUser } from '@/app/utils/prismaQueries/getUserIdByImage'
import Answers from '@/app/components/UI/Global/Stats/Answers'

interface IProps {
  searchParams?: {
    c: string
    cc: string
  }
}

const Page: (props: IProps) => Promise<JSX.Element> = async ({ searchParams }) => {
  const { c: count, cc: correctCount } = searchParams as any
  const user = await getUser()
  const links = [
    { href: '/', content: 'Main Page' },
    { href: `/user/${user?.id}`, content: 'Profile' },
    { href: '/speed', content: 'Solve more' },
  ]
  return (
    <div className="pt-10 w-[90%] mx-auto">
      <div className="bg-custom-pale-blue p-5 block-neo-style py-5 flex gap-5 flex-col items-center justify-evenly">
        <div className="w-full items-center justify-center flex bg-[#444444] min-w-[150px] w-11/12 block-neo-style min-h-[100px] py-5">
          <div className="min-w-[100px] w-9/12 text-center">
            <p className="text-4xl text-white pb-5">Results</p>
            <ProgressBar count={Number(count)} correctCount={Number(correctCount)} />
            <div className="pt-2">
              <Answers count={Number(count)} correctCount={Number(correctCount)} />
            </div>
          </div>
        </div>
        <div className="text-xl w-full items-center sm:items-stretch justify-evenly gap-5 sm:flex-col flex bg-[#444444] min-w-[150px] w-11/12 block-neo-style min-h-[100px] p-5">
          {links.map(link => (
            <Link href={link.href} className="flex-auto block">
              <div className="active:top-[2px] relative top-0 bg-white block-neo-style py-5 text-center">{link.content}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
