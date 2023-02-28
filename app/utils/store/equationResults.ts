import {create} from "zustand";

interface IStore {
    answeredCount: number
    correctlyAnsweredCount: number
    addAnsweredCount: () => void
    addCorrectlyAnsweredCount: () => void
    removeCorrectlyAnsweredCount: () => void
    resetCount: () => void
}

export const useEquationResults = create<IStore>((set, get) => ({
    answeredCount: 0,
    correctlyAnsweredCount: 0,
    addAnsweredCount: () => set({answeredCount: get().answeredCount + 1}),
    addCorrectlyAnsweredCount: () => set({correctlyAnsweredCount: get().correctlyAnsweredCount + 1}),
    removeCorrectlyAnsweredCount: () => set({correctlyAnsweredCount: get().correctlyAnsweredCount - 1}),
    resetCount: () => set({correctlyAnsweredCount: 0, answeredCount: 0})
}))