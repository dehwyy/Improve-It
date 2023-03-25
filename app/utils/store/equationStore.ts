import { create } from 'zustand'
import produce from 'immer'
import { Difficulties, Modes } from '@/types/export'

interface IAnswer {
  isTruthy: boolean
  timeMs: number
}

interface ISetAnswer {
  isTruthy: boolean
  idx: number
  startTimeMs: number
}

interface IEquationStore {
  page: number
  setPage: (page: number) => void
  answers: IAnswer[] | null
  setAnswer: (setAnswerArgs: ISetAnswer) => void
  initializeAnswers: (arrayLength: number) => void
}

export const useEquationStore = create<IEquationStore>((set, get) => ({
  page: 0,
  setPage: page => set({ page }),
  answers: null,
  initializeAnswers: arrayLength => set({ answers: new Array(arrayLength).fill({ isTruthy: false, timeMs: 0 }) }),
  setAnswer: ({ isTruthy, startTimeMs, idx }) =>
    set(
      produce<IEquationStore>(state => {
        if (state.answers) {
          state.answers[idx].isTruthy = isTruthy
          state.answers[idx].timeMs = Date.now() - startTimeMs
        }
      })
    ),
}))

interface IEquationAnimationStore {
  isAnimation: boolean
  setAnimation: (state: boolean) => void
}

export const useEquationAnimationStore = create<IEquationAnimationStore>(set => ({
  isAnimation: false,
  setAnimation: state => set({ isAnimation: state }),
}))

interface IEquationSettings {
  count: number | null
  difficulty: Difficulties | null
  mode: Modes | null
}

interface IEquationSettingsStore extends IEquationSettings {
  setEquationSettings: (args: Partial<IEquationSettings>) => void
}

export const useEquationSettingsStore = create<IEquationSettingsStore>(set => ({
  mode: null,
  count: null,
  difficulty: null,
  setEquationSettings: ({ difficulty, count, mode }) =>
    set(
      produce<IEquationSettingsStore>(state => {
        if (difficulty) state.difficulty = difficulty
        if (count) state.count = count
        if (mode) state.mode = mode
      })
    ),
}))
