'use client'
import { ApiRoutesUser } from '@/types/routes'
import { CircularProgress } from '@mui/material'
import useEditField from '@/app/utils/hooks/LocalHooks/useEditField'

interface IProps {
  name: string
}

const Nickname = ({ name }: IProps) => {
  const { value, setValue, isShowingLoader, isNotShowingText, isValidMainField, submit } = useEditField({
    apiRoute: ApiRoutesUser.getUserByNickname,
    key: 'nickname',
  })
  return (
    <span className="flex gap-3 flex-col w-full p-5 !pt-0">
      <span className="text-gray-300 pl-1">Nickname:</span>
      <span className="rounded-xl overflow-hidden border-2 border-transparent focus-within:border-fuchsia-500">
        <input value={value} onChange={setValue} maxLength={20} className="w-full text-bold text-2xl p-2 outline-0" />
      </span>
      <span className={`${isValidMainField ? 'text-blue-500' : 'text-red-800'} flex transition-all`}>
        <span className="text-2xl text-center w-full relative">
          {isShowingLoader && (
            <span className="absolute translate-x-1/2 right-1/2">
              <CircularProgress color="secondary" style={{ height: '40px', width: '40px' }} />
            </span>
          )}
          <span className={`${isNotShowingText ? 'opacity-0' : 'opacity-100'} transition-all`}>
            <span onClick={submit} className={`${isValidMainField ? 'cursor-pointer' : 'cursor-default'} p-1 select-none`}>
              Save
            </span>
          </span>
        </span>
      </span>
    </span>
  )
}

export default Nickname
