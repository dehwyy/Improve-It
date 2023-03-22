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
    playerId: string | 'bot'
    playerTimeMsSpend: string
    answers: {
      isCorrect: boolean
      timeMs: number
    }[]
  }[]
}

interface TempUser {
  Sessions: SessionRoom[]
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
