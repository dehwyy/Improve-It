import { create } from 'zustand'
import produce from 'immer'

export type ModalWindows = 'ProfileImage' | 'ProfileBackgroundImage'

interface IStore {
  isOpenWindow: {
    [Key in ModalWindows]: boolean
  }
  setOpenWindow: (window: ModalWindows, flag: boolean) => void
}

export const useModalWindowsStore = create<IStore>((set, get) => ({
  isOpenWindow: {
    ProfileImage: false,
    ProfileBackgroundImage: false,
  },
  setOpenWindow: (window, flag) => {
    set(
      produce<IStore>(state => {
        state.isOpenWindow[window] = flag
      })
    )
  },
}))
