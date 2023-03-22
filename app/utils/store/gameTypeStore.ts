import { PlayerModes } from '@/types/export'
import { create } from 'zustand'

interface IGameTypeStore {
  gameType: PlayerModes | null
  setGameType: (gameType: PlayerModes | null) => void
}

export const useGameTypeStore = create<IGameTypeStore>(set => ({
  gameType: null,
  setGameType: gameType => set({ gameType }),
}))
