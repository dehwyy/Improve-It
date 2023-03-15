'use client'
import { signIn } from 'next-auth/react'
import CustomButton from '@/app/components/UI/Global/CustomButton'
import Link from 'next/link'
import { FC } from 'react'
import ButtonsLanguages from '@/app/components/Buttons/buttons'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import AlphaStyleWrapper from '@/app/components/UI/Wrappers/_AlphaPageWrapper'

interface IProps {
  id: string | undefined
}

const UserButton: FC<IProps> = ({ id }) => {
  const language = useFieldsByLanguage(ButtonsLanguages)
  return language && id ? (
    <Link href={`/user/${id}`} className="w-[90%]">
      <AlphaStyleWrapper classes="shadow-blue-500/100 shadow-md mt-10 text-blue-500 font-extrabold border-current">
        {language.profile}
      </AlphaStyleWrapper>
    </Link>
  ) : (
    <div onClick={() => signIn()} className="cursor-pointer w-[90%]">
      <AlphaStyleWrapper classes="shadow-red-500/100 shadow-md mt-10 text-red-500 font-extrabold border-current">{language.signIn}</AlphaStyleWrapper>
    </div>
  )
}

export default UserButton
