import {create} from "zustand"
import {Diffs} from "@/types/export";

interface IStore {
    diff: Diffs
    count: EquationsCountT
    setEquation: (newDiff: Diffs, newCount: EquationsCountT) => void
}

export const useEquationStore = create<IStore>(set => ({
    diff: Diffs.Easy,
    count: 10,
    setEquation: (newDiff: Diffs, newCount: EquationsCountT) => set({diff: newDiff, count: newCount})
}))