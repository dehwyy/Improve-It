'use client'
import Link from 'next/link'
import UserButton from '@/app/components/Buttons/_components/UserButton'
import { FC } from 'react'
import useFieldsByLanguage from '@/app/utils/hooks/GlobalHooks/useFieldsByLanguage'
import ButtonsLanguages from '@/app/components/Buttons/buttons'
import { Skeleton } from '@mui/material'
import StyledWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import TopPageLoader from '@/app/components/UI/Global/TopPageLoader'
import IndexButton from '@/app/components/Guides/IndexButton'

interface IProps {
  id: string | undefined
}

const Component: FC<IProps> = ({ id }) => {
  const language = useFieldsByLanguage(ButtonsLanguages)
  if (!language) return <Skeleton variant="rectangular" height="300" />
  return (
    <>
      <TopPageLoader />
      <div className="flex justify-evenly text-3xl lg:flex-col lg:items-center sm:gap-y-0 gap-x-10 gap-5">
        <Link href="/solve" className="w-[90%]">
          <IndexButton testid="solve_button_style" className="shadow-green-500/100 text-green-500">
            {language.solve}
          </IndexButton>
        </Link>
        <UserButton id={id} />
      </div>
    </>
  )
}
export default Component
