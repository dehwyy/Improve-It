import { create } from 'zustand'
import { Diffs } from '@/types/export'

interface IFormStore {
  diff: Diffs
  count: EquationsCountT
  trigger: boolean
  generate: () => void
  setEquation: (newDiff: Diffs, newCount: EquationsCountT) => void
}

export const useEquationStore = create<IFormStore>((set, get) => ({
  diff: Diffs.Easy,
  count: 10,
  trigger: true,
  generate: () => set({ trigger: !get().trigger }),
  setEquation: (newDiff: Diffs, newCount: EquationsCountT) => set({ diff: newDiff, count: newCount }),
}))

interface IResultsStore {
  answeredCount: number
  correctlyAnsweredCount: number
  addAnsweredCount: () => void
  addCorrectlyAnsweredCount: () => void
  removeCorrectlyAnsweredCount: () => void
  resetCount: () => void
}

export const useEquationResultsStore = create<IResultsStore>((set, get) => ({
  answeredCount: 0,
  correctlyAnsweredCount: 0,

  addAnsweredCount: () => set({ answeredCount: get().answeredCount + 1 }),
  addCorrectlyAnsweredCount: () => set({ correctlyAnsweredCount: get().correctlyAnsweredCount + 1 }),
  removeCorrectlyAnsweredCount: () => set({ correctlyAnsweredCount: get().correctlyAnsweredCount - 1 }),
  resetCount: () => set({ correctlyAnsweredCount: 0, answeredCount: 0 }),
}))

interface ISingleStore {
  activeEquation: number
  setActiveEquation: (newState: number) => void
}

export const useSingleEquationStore = create<ISingleStore>((set, get) => ({
  activeEquation: 0,

  setActiveEquation: (newState: number) => set({ activeEquation: newState }),
}))
