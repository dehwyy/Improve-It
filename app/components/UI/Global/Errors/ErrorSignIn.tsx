import StyleWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

const ErrorSignIn = ({ reason }: { reason: string }) => {
  return (
    <StyleWrapper className="text-red-500 shadow-red-500 border-current shadow-lg font-extrabold">
      Error! Please sign in to continue! Reason: {reason}
    </StyleWrapper>
  )
}

export default ErrorSignIn
