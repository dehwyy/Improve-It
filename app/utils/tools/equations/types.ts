export enum Signs {
  plus = '+',
  minus = '-',
}
// Every class of <EquationKind> must implement this interface
export interface IEquationKind {
  EasyEquation: () => ReturnEquationT
  MediumEquation: () => ReturnEquationT
  HardEquation: () => ReturnEquationT
  ImpossibleEquation: () => ReturnEquationT
}
export type ReturnEquationT = [string, number]
// It should return [<equation> as string, <equation result> as number]!
export interface IBotKind {
  EasyEquation: () => number
  MediumEquation: () => number
  HardEquation: () => number
  ImpossibleEquation: () => number
}

export interface IPlusMinusHelper extends IEquationBaseHelper {
  getRandomSign: () => Signs
  generatePlusOrMinusAndGetResult(minusCb: () => number, plusCb: () => number): { sign: string; result: number }
}

export interface IEquationBaseHelper {
  getRandomFrom: (...args: number[]) => number
}
