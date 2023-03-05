export enum Signs {
  plus = '+',
  minus = '-',
}
export interface IRandomModule {
  getRandomInRange: (minNumber: number, maxNumber: number, k?: number) => number
  getRandomRoundInRange: (minNumber: number, maxNumber: number, k?: number) => number
  getRandomFromArray: <T, Nullable = T>(arr: T[]) => T | Nullable
}
// Every class of <EquationKind> must implement this interface
export interface IEquationKind {
  EasyEquation: () => ReturnEquationT
  MediumEquation: () => ReturnEquationT
  HardEquation: () => ReturnEquationT
  ImpossibleEquation: () => ReturnEquationT
}
// It should return [<equation> as string, <equation result> as number]!
export type ReturnEquationT = [string, number]

export interface IPlusMinusHelper extends IEquationBaseHelper {
  getRandomSign: () => Signs
  generatePlusOrMinusAndGetResult(minusCb: () => number, plusCb: () => number): { sign: string; result: number }
}

export interface IEquationBaseHelper {
  getRandomFrom: (...args: number[]) => number
}
