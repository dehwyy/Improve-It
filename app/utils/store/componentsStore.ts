import { create } from 'zustand'

interface INavbarStore {
  isOpened: boolean
  setIsOpen: () => void
}

export const useNavbarStore = create<INavbarStore>((set, get) => ({
  isOpened: false,
  setIsOpen: () => set({ isOpened: !get().isOpened }),
}))

interface ILanguageSelectorStore {
  isOpened: boolean
  setOpened: (state: boolean) => void
}

export const useLanguageSelectorStore = create<ILanguageSelectorStore>(set => ({
  isOpened: false,
  setOpened: state => set({ isOpened: state }),
}))
