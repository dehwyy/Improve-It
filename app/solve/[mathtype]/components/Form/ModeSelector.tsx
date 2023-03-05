import { FC } from 'react'
import Link from 'next/link'
import { Modes } from '@/types/export'

interface IProps {
  currentPage: Modes
}

const ModeSelector: FC<IProps> = ({ currentPage }) => {
  return (
    <div className="min-w-screen mx-auto flex-auto usm:flex-col usm:gap-y-2 usm:border-b-4 usm:pb-2 usm:border-[#444444] flex gap-x-5 px-5 select-none">
      {Object.keys(Modes).map((option, i) => (
        <Link href={`/solve/${option}`} key={i} className="flex-auto ">
          <div
            className={
              (currentPage === option && 'bg-[#515151] ') +
              'select-none text-xl bg-[#333333] text-white px-5 py-2 rounded border-black border-2 cursor-pointer text-center'
            }>
            {Modes[option as keyof typeof Modes]}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ModeSelector
