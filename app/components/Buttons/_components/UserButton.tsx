'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { FC } from 'react'
import ButtonsLanguages from '@/app/components/Buttons/buttons'
import useFieldsByLanguage from '@/app/utils/hooks/GlobalHooks/useFieldsByLanguage'
import IndexButton from '@/app/components/Guides/IndexButton'

interface IProps {
  id: string | undefined
}

const UserButton: FC<IProps> = ({ id }) => {
  const language = useFieldsByLanguage(ButtonsLanguages)

  return language && id ? (
    <Link href={`/user/${id}`} className="w-[90%]">
      <IndexButton className="shadow-blue-500/100 text-blue-500" testid="profile_button_style">
        {language.profile}
      </IndexButton>
    </Link>
  ) : (
    <div onClick={() => signIn()} className="cursor-pointer w-[90%]">
      <IndexButton className="shadow-blue-500/100 text-blue-500" testid="auth_button_style">
        {language.signIn}
      </IndexButton>
    </div>
  )
}

export default UserButton
