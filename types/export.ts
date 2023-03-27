export enum Modes {
  Variable = 'Variable',
  Multiply = 'Multiply',
  PlusMinus = 'Plus / Minus',
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
  WithBot = 'With Bot',
}

export enum BotDifficulties {
  Noob = 'Noob',
  Mid = 'Mid',
  Pro = 'Pro',
}
type PlayerId = string | 'bot'

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
