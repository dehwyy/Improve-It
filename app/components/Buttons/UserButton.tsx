'use client'
import { signIn } from 'next-auth/react'
import CustomButton from '@/app/components/UI/Global/CustomButton'
import Link from 'next/link'
import { FC } from 'react'
import ButtonsLanguages from '@/app/components/Buttons/buttons'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
interface IProps {
  id: string | undefined
}

const UserButton: FC<IProps> = ({ id }) => {
  const language = useFieldsByLanguage(ButtonsLanguages)
  return language && id ? (
    <Link href={`/user/${id}`}>
      <CustomButton>{language.profile}</CustomButton>
    </Link>
  ) : (
    <div onClick={() => signIn()} className="cursor-pointer">
      <CustomButton>{language.signIn}</CustomButton>
    </div>
  )
}

export default UserButton
