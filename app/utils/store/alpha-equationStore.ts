import { create } from 'zustand'
import produce from 'immer'
import { Diffs } from '@/types/export'
import { AlphaModes } from '@/types/alpha-export'

interface IAnswer {
  isTruthy: boolean
  timeMs: number
}

interface ISetAnswer {
  isTruthy: boolean
  idx: number
  startTimeMs: number
}

interface IAlphaEquationStore {
  answers: IAnswer[] | null
  setAnswer: (setAnswerArgs: ISetAnswer) => void
  initializeAnswers: (arrayLength: number) => void
}

export const useAlphaEquationStore = create<IAlphaEquationStore>(set => ({
  answers: null,
  initializeAnswers: arrayLength => set({ answers: new Array(arrayLength).fill({ isTruthy: false, timeMs: 0 }) }),
  setAnswer: ({ isTruthy, startTimeMs, idx }) =>
    set(
      produce<IAlphaEquationStore>(state => {
        if (state.answers) {
          state.answers[idx].isTruthy = isTruthy
          state.answers[idx].timeMs = Date.now() - startTimeMs
        }
      })
    ),
}))

interface IEquationGenerator {
  count: number | null
  difficulty: Diffs | null
  mode: AlphaModes | null
}

interface IAlphaEquationGeneratorStore extends IEquationGenerator {
  setEquationSettings: (args: Partial<IEquationGenerator>) => void
}

export const useAlphaEquationGeneratorStore = create<IAlphaEquationGeneratorStore>(set => ({
  mode: null,
  count: null,
  difficulty: null,
  setEquationSettings: ({ difficulty, count, mode }) =>
    set({
      count,
      mode,
      difficulty,
    }),
}))
