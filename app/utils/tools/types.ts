export interface IRandomModule {
  getRandomInRange: (first: number, second: number, k?: number) => number
  getRandomFromArray: <T, Nullable = T>(arr: T[]) => T | Nullable
  getRandomWithCoefficientRounded: (coefficient: number, roundLength: number) => number
}
