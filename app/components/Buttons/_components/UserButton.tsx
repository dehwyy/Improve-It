'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import ButtonsLanguages from '@/app/components/Buttons/buttons'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

interface IProps {
  id: string | undefined
}

const ButtonStyledWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyleWrapper className="hover:shadow-red-500/100 hover:text-red-500 shadow-blue-500/100 shadow-lg mt-10 text-blue-500 font-extrabold border-current">
      {children}
    </StyleWrapper>
  )
}

const UserButton: FC<IProps> = ({ id }) => {
  const language = useFieldsByLanguage(ButtonsLanguages)

  return language && id ? (
    <Link href={`/user/${id}`} className="w-[90%]">
      <ButtonStyledWrapper>{language.profile}</ButtonStyledWrapper>
    </Link>
  ) : (
    <div onClick={() => signIn()} className="cursor-pointer w-[90%]">
      <ButtonStyledWrapper>{language.signIn}</ButtonStyledWrapper>
    </div>
  )
}

export default UserButton
