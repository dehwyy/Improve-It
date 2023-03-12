'use client'
import Link from 'next/link'
import CustomButton from '@/app/components/UI/Global/CustomButton'
import UserButton from '@/app/components/Buttons/UserButton'
import { FC } from 'react'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import ButtonsLanguages from '@/app/components/Buttons/buttons'
import { Skeleton } from '@mui/material'

interface IProps {
  id: string | undefined
}

const Component: FC<IProps> = ({ id }) => {
  const language = useFieldsByLanguage(ButtonsLanguages)
  if (!language) return <Skeleton variant="rectangular" height="300" />
  return (
    <div className="flex justify-evenly pt-16 text-3xl sm:flex-col sm:items-center sm:gap-y-5">
      <Link href={'/solve/plusminus'}>
        <CustomButton>{language.solve}</CustomButton>
      </Link>
      <UserButton id={id} />
    </div>
  )
}

export default Component
