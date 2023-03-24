import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'
import { signIn } from 'next-auth/react'
import { useMemo } from 'react'

const ErrorSignIn = ({ reason, children }: { reason?: string; children?: React.ReactNode }) => {
  const SignIn = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.stopPropagation()
    signIn()
  }
  const SignPhrase = useMemo(() => {
    return ` sign `
  }, [])
  return (
    <>
      <StyleWrapper className="text-red-500 shadow-red-500 border-current shadow-lg font-extrabold" style={{ display: 'block', cursor: 'default' }}>
        <span>Error! Please</span>
        <span className="text-blue-500 cursor-pointer" onClick={SignIn}>
          {SignPhrase}
        </span>
        <span>in to continue! {reason ? `Reason: ${reason}` : ''}</span>
      </StyleWrapper>
      {children}
    </>
  )
}

export default ErrorSignIn
