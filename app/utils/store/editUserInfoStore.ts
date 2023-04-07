import { create } from 'zustand'
import produce from 'immer'
import { ApiRoutesUser } from '@/types/routes'

interface IsValid {
  nickname: boolean
}

interface IUserInfo {
  isEdit: boolean
  setEdit: (newState: boolean) => void
  isEditable: boolean
  setEditable: (newState: boolean) => void
  isAbleToChange: boolean
  setAbleToChange: (newState: boolean) => void
  isValid: IsValid
  setValid: (newState: boolean, key: keyof IsValid) => void
  submitNewValues: (id: string) => void
  nickname: string
  setNickname: (nickname: string) => void
  submittedNickname: string
  setSubmittedNickname: (nickname: string) => void
}

export const useEditUserInfoStore = create<IUserInfo>((set, get) => ({
  isEdit: false,
  setEdit: newState => set({ isEdit: newState }),
  isAbleToChange: true,
  setAbleToChange: newState => set({ isAbleToChange: newState }),
  isEditable: false,
  setEditable: newState => set({ isEditable: newState }),
  isValid: {
    nickname: true,
  },
  setValid: (newState, key) =>
    set(
      produce<IUserInfo>(state => {
        state.isValid[key] = newState
      })
    ),
  nickname: '',
  setNickname: nickname => set({ nickname }),
  submittedNickname: '',
  setSubmittedNickname: nickname => set({ submittedNickname: nickname }),
  submitNewValues: id => {
    if (!~Object.values(get().isValid).findIndex(item => item == false)) {
      set({ submittedNickname: get().nickname })
      fetch(ApiRoutesUser.updateUserInfo, {
        method: 'POST',
        body: JSON.stringify({
          userId: id,
          nickname: get().nickname,
        }),
      })
    }
  },
}))
