import { create } from 'zustand'
import produce from 'immer'
import { ApiRoutesUser } from '@/types/routes'

interface UserChangeableValues<T> {
  nickname: T
}

interface IEditUserInfoStore {
  // --- global edit mode ---
  isLoading: boolean
  setLoading: (state: boolean) => void
  // ---
  isValidFields: UserChangeableValues<boolean>
  setValidFields: (state: boolean, key: keyof UserChangeableValues<boolean>) => void
  // ---
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
  submitFields: (data: { id: string; key: keyof UserChangeableValues<string> }) => void
  // ---     end      ---
}

export const useUserEditorStore = create<IEditUserInfoStore>((set, get) => ({
  isLoading: false,
  setLoading: state => set({ isLoading: state }),
  // ----------------------------------------------
  // ----------------------------------------------
  isValidFields: {
    nickname: true,
  },
  setValidFields: (state, key) =>
    set(
      produce<IEditUserInfoStore>(store => {
        store.isValidFields[key] = state
      })
    ),
  // ----------------------------------------------
  // ----------------------------------------------
  initialValues: {
    nickname: '',
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
  submitFields: ({ id, key }) => {
    if (!~Object.values(get().isValidFields).findIndex(item => item == false)) {
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
