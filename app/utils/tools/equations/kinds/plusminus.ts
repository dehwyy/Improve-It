import type { IEquationKind, ReturnEquationT, IPlusMinusHelper } from '@/app/utils/tools/equations/types'

export default class PlusMinusEquation implements IEquationKind {
  constructor(private PlusMinusHelperModule: IPlusMinusHelper) {}

  EasyEquation(): ReturnEquationT {
    const rFirst = this.PlusMinusHelperModule.getRandomFrom(20, 100)
    const rSecond = this.PlusMinusHelperModule.getRandomFrom(20, 100)
    const { sign, result } = this.PlusMinusHelperModule.generatePlusOrMinusAndGetResult(
      () => rFirst - rSecond,
      () => rFirst + rSecond
    )
    return [`${rFirst} ${sign} ${rSecond} = `, result]
  }

  MediumEquation(): ReturnEquationT {
    const rFirst = this.PlusMinusHelperModule.getRandomFrom(20, 1000)
    const rSecond = this.PlusMinusHelperModule.getRandomFrom(20, 1000)
    const { sign, result } = this.PlusMinusHelperModule.generatePlusOrMinusAndGetResult(
      () => rFirst - rSecond,
      () => rFirst + rSecond
    )
    return [`${rFirst} ${sign} ${rSecond} = `, result]
  }
  HardEquation(): ReturnEquationT {
    const rFirst = this.PlusMinusHelperModule.getRandomFrom(20, 100000)
    const rSecond = this.PlusMinusHelperModule.getRandomFrom(20, 100000)
    const { sign, result } = this.PlusMinusHelperModule.generatePlusOrMinusAndGetResult(
      () => rFirst - rSecond,
      () => rFirst + rSecond
    )
    return [`${rFirst} ${sign} ${rSecond} = `, result]
  }
  ImpossibleEquation(): ReturnEquationT {
    const rFirst = this.PlusMinusHelperModule.getRandomFrom(2000, 10000000)
    const rSecond = this.PlusMinusHelperModule.getRandomFrom(2000, 10000000)
    const { sign, result } = this.PlusMinusHelperModule.generatePlusOrMinusAndGetResult(
      () => rFirst - rSecond,
      () => rFirst + rSecond
    )
    return [`${rFirst} ${sign} ${rSecond} = `, result]
  }
}
