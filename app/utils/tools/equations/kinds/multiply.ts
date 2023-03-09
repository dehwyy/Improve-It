import type { IEquationKind, ReturnEquationT, IEquationBaseHelper } from '@/app/utils/tools/equations/types'

export default class MultiplyEquation implements IEquationKind {
  constructor(private EquationBaseHelper: IEquationBaseHelper) {}

  EasyEquation(): ReturnEquationT {
    const rFirst = this.EquationBaseHelper.getRandomFrom(5, 20)
    const rSecond = this.EquationBaseHelper.getRandomFrom(5, 20)
    return [`${rFirst} * ${rSecond} = `, rFirst * rSecond]
  }

  MediumEquation(): ReturnEquationT {
    const rFirst = this.EquationBaseHelper.getRandomFrom(20, 70)
    const rSecond = this.EquationBaseHelper.getRandomFrom(20, 70)
    return [`${rFirst} * ${rSecond} = `, rFirst * rSecond]
  }
  HardEquation(): ReturnEquationT {
    const rFirst = this.EquationBaseHelper.getRandomFrom(20, 100)
    const rSecond = this.EquationBaseHelper.getRandomFrom(20, 100)
    return [`${rFirst} * ${rSecond} = `, rFirst * rSecond]
  }
  ImpossibleEquation(): ReturnEquationT {
    const rFirst = this.EquationBaseHelper.getRandomFrom(100, 1000)
    const rSecond = this.EquationBaseHelper.getRandomFrom(100, 1000)
    return [`${rFirst} * ${rSecond} = `, rFirst * rSecond]
  }
}
