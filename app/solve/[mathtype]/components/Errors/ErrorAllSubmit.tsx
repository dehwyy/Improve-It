'use client'
import SolveError from '@/app/components/UI/Global/Error/SolveError'
import { FC } from 'react'
import useFieldsByLanguage from '@/app/utils/hooks/useFieldsByLanguage'
import ErrorsLanguages from '@/app/solve/[mathtype]/components/Errors/errors'

interface IProps {
  isError: boolean
  setError: () => void
}

const ErrorAllSubmit: FC<IProps> = ({ setError, isError }) => {
  const language = useFieldsByLanguage(ErrorsLanguages)
  return (
    language && (
      <SolveError setTrigger={setError} trigger={isError}>
        {language.allSubmit.allow}
        <span className="text-green-300">{language.allSubmit.all}</span>&nbsp;
        {language.allSubmit.equations}
      </SolveError>
    )
  )
}

export default ErrorAllSubmit
