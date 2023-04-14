'use client'
import { Input } from '@mui/material'
import Button from '@/app/user/[id]/components/_components/UserInfo/__components/Button'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import { Mulish } from 'next/font/google'
import { useUserEditorStore } from '@/app/utils/store/editUserInfoStore'
import { shallow } from 'zustand/shallow'
import nickname from '@/app/user/[id]/components/_components/UserInfo/Nickname'
import { useState } from 'react'

const h2Font = Mulish({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
})

interface IProps {}

const Description = ({}: IProps) => {
  const [description, setDescription] = useState('')

  const [isEditMode, hasAccessToEdit, toggleEdit] = useUserEditorStore(
    state => [state.isEditMode, state.hasAccessToEdit, state.toggleEditMode],
    shallow
  )
  return (
    <div className="pb-5">
      <h2 className={`${h2Font.className} usm:text-[2rem] text-3xl flex usm:flex-col usm:gap-y-3 justify-center items-center gap-x-1`}>
        {!isEditMode ? (
          <span
            className={`${h2Font.className} ${description.length ? 'text-gray-100' : 'text-blue-500'} p-1 text-center usm:text-[1.9rem] text-3xl`}>
            {description || <span className="text-xl usm:text-[1.2rem] font-bold">set description</span>}
          </span>
        ) : (
          <Input
            multiline
            placeholder="Share something about yourself"
            color="error"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={`${h2Font.className} !w-full sm:text-[1rem] sm:leading-5 text-xl !p-1 !outline-0 !text-white !rounded-md　!cursor-pointer`}
          />
        )}
      </h2>
    </div>
  )
}

export default Description
