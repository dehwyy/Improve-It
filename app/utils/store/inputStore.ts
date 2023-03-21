import { create } from 'zustand'

interface IUseInputStore {
  setPressedKey: (key: InputKey | null) => void
  previousKey: InputKey | null
  trigger: boolean
}

export const useInputStore = create<IUseInputStore>((set, get) => ({
  setPressedKey: key => set({ previousKey: key, trigger: !get().trigger }),
  previousKey: null,
  trigger: true,
}))
