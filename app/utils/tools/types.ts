export interface IRandomModule {
  getRandomInRange: (first: number, second: number, k?: number) => number
  getRandomFromArray: <T, Nullable = T>(arr: T[]) => T | Nullable
  getRandomWithFloor: (min: number, max: number, round?: number) => number
}
