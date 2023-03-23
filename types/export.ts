export enum Modes {
  variable = 'Variable',
  multiply = 'Multiply',
  plusminus = 'Plus / Minus',
}

export enum Difficulties {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
  Impossible = 'Impossible',
}

export enum PlayerModes {
  Solo = 'Solo',
  Multiplayer = 'Multiplayer',
  Withbot = 'With Bot',
}

export enum BotDifficulties {
  Noob = 'Noob',
  Mid = 'Mid',
  Pro = 'Pro',
}
type PlayerId = string | 'bot'
interface SessionRoom {
  sessionId: string
  difficulty: Difficulties
  mode: Modes
  count: number
  day: number
  month: number
  year: number
  time: string
  playerMode: PlayerModes
  winner: SessionWinner
  participants: {
    playerId: PlayerId
    playerTimeMsSpend: string
  }[]
  answers: {
    playerId: PlayerId
    timeMs: number
  }[]
}

export interface Session {
  difficulty: Difficulties
  mode: Modes
  allTimeMs: number
  count: number
  day: number
  month: number
  year: number
  time: string
  playerMode: PlayerModes
  winner: SessionWinner
  answers: {
    isCorrect: boolean
    timeMs: number
  }[]
}
