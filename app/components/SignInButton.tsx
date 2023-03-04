'use client'
import { signIn } from 'next-auth/react'
import CustomButton from '@/app/components/UI/Global/CustomButton'

const SignInButton = () => {
  return (
    <div onClick={() => signIn()} className="cursor-pointer">
      <CustomButton>Sign in</CustomButton>
    </div>
  )
}

export default SignInButton
