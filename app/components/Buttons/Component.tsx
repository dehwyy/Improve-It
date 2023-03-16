'use client'
import Link from 'next/link'
import UserButton from '@/app/components/Buttons/_components/UserButton'
import { FC } from 'react'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import ButtonsLanguages from '@/app/components/Buttons/buttons'
import { Skeleton } from '@mui/material'
import StyledWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

interface IProps {
  id: string | undefined
}

const Component: FC<IProps> = ({ id }) => {
  const language = useFieldsByLanguage(ButtonsLanguages)
  if (!language) return <Skeleton variant="rectangular" height="300" />
  return (
    <div className="flex justify-evenly pt-16 text-3xl lg:flex-col lg:items-center gap-x-10 gap-5">
      <Link href="/solve" className="w-[90%]">
        <StyledWrapper className="shadow-lg shadow-green-500/100 mt-10 text-green-500 hover:shadow-red-500/100 hover:text-red-500 font-extrabold border-current">
          {language.solve}
        </StyledWrapper>
      </Link>
      <UserButton id={id} />
    </div>
  )
}

export default Component
