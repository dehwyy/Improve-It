export enum Admin {
  id = 'clfxeepe10000viaw5hyehvng',
}

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

export enum LeaderboardType {
  'Correctness' = 'correctness',
  'Total answers' = 'totalCount',
  'Correctness percentage' = 'percentage',
}
export type LeaderboardKey = keyof typeof LeaderboardType

export interface ILeaderboardUser {
  id: string
  name: string | null
  nickname: string | null
  image: string | null
  profilePicture: string | null
  correctAnswers: unknown[]
  answered: number
}
