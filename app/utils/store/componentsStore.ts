import {create} from "zustand";

interface INavbarStore {
    isOpened: boolean
    setIsOpen: () => void
}

export const useNavbarStore = create<INavbarStore>((set, get) => ({
    isOpened: false,
    setIsOpen: () => set({isOpened: !get().isOpened})
}))