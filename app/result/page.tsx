import ProgressBar from '@/app/components/UI/Global/Stats/ProgressBar'
import { FC } from 'react'
import { Button } from '@mui/material'
import CustomButton from '@/app/components/UI/Global/CustomButton'
import Link from 'next/link'

interface IProps {
  searchParams: {
    c: string
    cc: string
  }
}

const links = [
  { href: '/', content: 'Main Page' },
  { href: '/dehwyy', content: 'Profile' },
  { href: '/speed', content: 'Solve more' },
]

const Page: FC<IProps> = ({ searchParams }) => {
  const { c: count, cc: correctCount } = searchParams
  return (
    <div className="pt-10 w-[90%] mx-auto">
      <div className="bg-custom-pale-blue p-5 block-neo-style py-5 h-[400px] flex flex-col items-center justify-evenly">
        <div className="w-full items-center justify-center flex bg-[#444444] min-w-[150px] w-11/12 block-neo-style min-h-[100px] py-5">
          <div className="min-w-[100px] w-9/12 text-center">
            <p className="text-4xl text-white pb-5">Results</p>
            <ProgressBar count={Number(count)} correctCount={Number(correctCount)} />
          </div>
        </div>
        <div className="w-full items-center justify-evenly flex bg-[#444444] min-w-[150px] w-11/12 block-neo-style min-h-[100px] py-5">
          {links.map(link => (
            <Link href={link.href}>
              <CustomButton>{link.content}</CustomButton>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
