import {create} from "zustand"
import {Diffs} from "@/types/export";

interface IStore {
    diff: Diffs
    count: EquationsCountT
    flag: boolean
    setEquation: (newDiff: Diffs, newCount: EquationsCountT) => void
}

export const useEquationStore = create<IStore>((set, get) => ({
    diff: Diffs.Easy,
    count: 10,
    flag: true,
    setEquation: (newDiff: Diffs, newCount: EquationsCountT) => set({diff: newDiff, count: newCount, flag: !get().flag})
}))