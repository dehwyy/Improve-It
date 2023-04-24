import { create } from 'zustand'
import produce from 'immer'
import { ApiRoutesUser } from '@/types/routes'

export interface UserChangeableValues<T> {
  nickname: T
  description: T
  img: T
  backgroundImg: T
}

interface IEditUserInfoStore {
  // --- global edit mode ---
  isLoading: boolean
  setLoading: (state: boolean) => void
  getIsValidFields: (data: { key: keyof UserChangeableValues<string>; anyValue: unknown }) => boolean
  // ---     end      ---
  // --------------------
  // --- initial data ---
  initialValues: UserChangeableValues<string>
  setInitialValues: (state: string, key: keyof UserChangeableValues<string>) => void
  // ---     end      ---
  /// -------------------
  // --- global state ---
  fieldsValues: UserChangeableValues<string>
  setFieldsValues: (state: string, key: keyof UserChangeableValues<boolean>) => void
  // ---     end      ---
  // ---  functions   ---
  submitFields: (data: { id: string; key: keyof UserChangeableValues<string>; anyValue: unknown }) => void
  // ---     end      ---
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
export const useUserEditorStore = create<IEditUserInfoStore>((set, get) => ({
  isLoading: false,
  setLoading: state => set({ isLoading: state }),
  // ----------------------------------------------
  // ----------------------------------------------
  getIsValidFields: ({ key, anyValue }) => {
    const validFields: UserChangeableValues<boolean> = {
      nickname: !anyValue && get().fieldsValues.nickname.length > 3,
      description: true,
      img: true,
      backgroundImg: true,
    }
    return validFields[key]
  },
  // ----------------------------------------------
  // ----------------------------------------------
  initialValues: {
    nickname: '',
    description: '',
    img: '',
    backgroundImg: '',
  },
  setInitialValues: (state, key) =>
    set(
      produce<IEditUserInfoStore>(store => {
        store.initialValues[key] = state
        store.fieldsValues[key] = state
      })
    ),
  // ----------------------------------------------
  // ----------------------------------------------
  fieldsValues: {
    nickname: '',
    description: '',
    img: '',
    backgroundImg: '',
  },
  setFieldsValues: (state, key) =>
    set(
      produce<IEditUserInfoStore>(store => {
        store.fieldsValues[key] = state
        store.isLoading = true
      })
    ),
  // ----------------------------------------------
  // ----------------------------------------------
  submitFields: ({ id, key, anyValue }) => {
    if (get().getIsValidFields({ anyValue, key })) {
      fetch(ApiRoutesUser.updateUserInfo, {
        method: 'POST',
        body: JSON.stringify({
          userId: id,
          [key]: get().fieldsValues[key],
          // add more fields to submit
        }),
      })
      set(
        produce<IEditUserInfoStore>(store => {
          store.initialValues[key] = store.fieldsValues[key]
        })
      )
    }
  },
}))
