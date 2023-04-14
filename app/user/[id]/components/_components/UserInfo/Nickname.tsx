'use client'
import { Mulish } from 'next/font/google'
import useNickname from '@/app/utils/hooks/LocalHooks/useNickname'
import { Input } from '@mui/material'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'

const h2Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

interface IProps {
  name: string
  previousNames: string[]
}

const Nickname = ({ name, previousNames }: IProps) => {
  const { setNickname, nickname } = useNickname(name, previousNames)
  const isEditMode = useUserEditorStore(state => state.isEditMode)
  return (
    <div className="pb-5">
      <h2 className={`${h2Font.className}`}>
        {!isEditMode ? (
          <span className={`${h2Font.className} w-full p-1 text-center sm:text-[1.5rem] text-4xl underline underline-offset-4`}>{nickname}</span>
        ) : (
          <Input
            autoFocus
            multiline
            color="error"
            placeholder="Set nickname"
            value={nickname}
            onChange={setNickname}
            className={`${h2Font.className} !w-full sm:text-[1.5rem] sm:leading-5 text-xl !p-1 !outline-0 !text-white !rounded-md　!cursor-pointer`}
          />
        )}
      </h2>
    </div>
  )
}

export default Nickname
