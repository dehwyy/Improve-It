'use client'
import { FC } from 'react'
import Link from 'next/link'
import { Modes } from '@/types/export'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import MathTypeLanguages from '@/app/solve/[mathtype]/components/Form/links'
import { Skeleton } from '@mui/material'

interface IProps {
  currentPage: keyof typeof Modes
}

const ModeSelector: FC<IProps> = ({ currentPage }) => {
  const language = useFieldsByLanguage(MathTypeLanguages)
  return (
    <div className="min-w-screen mx-auto flex-auto sm:flex-col sm:gap-y-2 sm:border-b-4 sm:pb-2 sm:border-[#444444] flex gap-x-5 px-5 select-none">
      {Object.keys(Modes).map((option, i) => (
        <Link href={`/solve/${option}`} key={i} className="flex-auto ">
          <div
            className={
              (currentPage === option && language && 'bg-[#515151] ') +
              'select-none text-xl bg-[#333333] text-white px-5 py-2 rounded border-black border-2 cursor-pointer text-center'
            }>
            {language ? language[Modes[option as keyof typeof Modes]] : <Skeleton variant="text" sx={{ backgroundColor: 'transparent' }} />}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ModeSelector
