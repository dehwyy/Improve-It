import { create } from 'zustand'
import produce from 'immer'
import { ApiRoutesUser } from '@/types/routes'

interface UserChangeableValues<T> {
  nickname: T
}

interface IEditUserInfoStore {
  // --- global edit mode ---
  hasAccessToEdit: boolean
  setAccessToEdit: (state: boolean) => void
  isEditMode: boolean
  setEditMode: (state: boolean) => void
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
  __iterateAndReset: () => void
  clickAwayHandler: () => void
  toggleEditMode: () => void
  submitFields: (data: { id: string }) => void
  // ---     end      ---
}

export const useUserEditorStore = create<IEditUserInfoStore>((set, get) => ({
  hasAccessToEdit: false,
  setAccessToEdit: state => set({ hasAccessToEdit: state }),
  isEditMode: false,
  setEditMode: state => set({ isEditMode: state }),
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
  __iterateAndReset: () => {
    for (let key in get().initialValues) {
      set(
        produce<IEditUserInfoStore>(store => {
          type keyT = keyof UserChangeableValues<string>
          store.fieldsValues[key as keyT] = store.initialValues[key as keyT]
        })
      )
    }
  },
  clickAwayHandler: () => {
    set({ isEditMode: false })
    get().__iterateAndReset()
  },
  toggleEditMode: () => {
    set({ isEditMode: !get().isEditMode })
    get().__iterateAndReset()
  },
  submitFields: ({ id }) => {
    if (!~Object.values(get().isValidFields).findIndex(item => item == false)) {
      fetch(ApiRoutesUser.updateUserInfo, {
        method: 'POST',
        body: JSON.stringify({
          userId: id,
          nickname: get().fieldsValues.nickname,
          // add more fields to submit
        }),
      })
      set(
        produce<IEditUserInfoStore>(store => {
          store.initialValues.nickname = store.fieldsValues.nickname
        })
      )
      set({ isEditMode: false })
    }
  },
}))
