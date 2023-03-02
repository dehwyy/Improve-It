import {create} from "zustand";

interface IStore {
    userId: number | string
    setUserId: (newId: number | string) => void
}

export const useUserStore = create<IStore>((set) => ({
    userId: 0,
    setUserId: newId => set({userId: newId})
}))