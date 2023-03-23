import { BotDifficulties, PlayerModes } from '@/types/export'
import { create } from 'zustand'

interface IGameTypeStore {
  gameType: PlayerModes | null
  setGameType: (gameType: PlayerModes | null) => void
}

export const useGameTypeStore = create<IGameTypeStore>(set => ({
  gameType: null,
  setGameType: gameType => set({ gameType }),
}))

interface IGameBotStore {
  difficulty: BotDifficulties | null
  setBotDifficulty: (difficulty: BotDifficulties | null) => void
}

export const useGameBotStore = create<IGameBotStore>(set => ({
  difficulty: null,
  setBotDifficulty: difficulty => set({ difficulty }),
}))

type GameParticipant = {
  id: string | 'bot'
}
interface IGameParticipantsStore {
  participants: GameParticipant[] | null
  setParticipants: (participants: GameParticipant[] | null) => void
}

export const useGameParticipantsStore = create<IGameParticipantsStore>(set => ({
  participants: null,
  setParticipants: participants => set({ participants }),
}))
