'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'
import ButtonsLanguages from '@/app/components/Buttons/buttons'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

interface IProps {
  id: string | undefined
}

const UserButton: FC<IProps> = ({ id }) => {
  const language = useFieldsByLanguage(ButtonsLanguages)
  return language && id ? (
    <Link href={`/user/${id}`} className="w-[90%]">
      <StyleWrapper className="hover:shadow-red-500/100 hover:text-red-500 shadow-blue-500/100 shadow-md mt-10 text-blue-500 font-extrabold border-current">
        {language.profile}
      </StyleWrapper>
    </Link>
  ) : (
    <div onClick={() => signIn()} className="cursor-pointer w-[90%]">
      <StyleWrapper className="hover:shadow-red-500/100 hover:text-red-500 shadow-yellow-500/100  mt-10 text-yellow-500 font-extrabold border-current">
        {language.signIn}
      </StyleWrapper>
    </div>
  )
}

export default UserButton
