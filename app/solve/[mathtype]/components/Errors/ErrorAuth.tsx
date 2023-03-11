'use client'
import { signIn } from 'next-auth/react'
import SolveError from '@/app/components/UI/Global/Error/SolveError'
import { FC } from 'react'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import ErrorsLanguages from '@/app/solve/[mathtype]/components/Errors/errors'

interface IProps {
  isError: boolean
  setError: () => void
}

const ErrorAuth: FC<IProps> = ({ setError, isError }) => {
  const language = useFieldsByLanguage(ErrorsLanguages)
  return (
    language && (
      <SolveError setTrigger={setError} trigger={isError}>
        {language.auth.please}&nbsp;
        <span className="cursor-pointer text-sky-400 " onClick={() => signIn()}>
          {language.auth.authorize}
        </span>
        &nbsp;{language.auth.toSubmit}
      </SolveError>
    )
  )
}

export default ErrorAuth
