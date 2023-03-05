import type { IEquationKind, ReturnEquationT, IPlusMinusHelper } from '@/app/utils/tools/equations/types'
export default class VariableEquation implements IEquationKind {
  constructor(private PlusMinusHelperModule: IPlusMinusHelper) {}
  EasyEquation(): ReturnEquationT {
    const x = this.PlusMinusHelperModule.getRandomFrom(1, 5)
    const randomK = this.PlusMinusHelperModule.getRandomFrom(2, 5)
    const randomConstant = this.PlusMinusHelperModule.getRandomFrom(1, 50, randomK)
    const { result, sign } = this.PlusMinusHelperModule.generatePlusOrMinusAndGetResult(
      () => x * randomK - randomConstant,
      () => x * randomK + randomConstant
    )
    return [`${randomK}x ${sign} ${randomConstant} = ${result} `, x]
  }
  MediumEquation(): ReturnEquationT {
    const x = this.PlusMinusHelperModule.getRandomFrom(1, 10)
    const randomK = this.PlusMinusHelperModule.getRandomFrom(3, 10)
    const randomConstant = this.PlusMinusHelperModule.getRandomFrom(1, 100, randomK)
    const { result, sign } = this.PlusMinusHelperModule.generatePlusOrMinusAndGetResult(
      () => x * randomK - randomConstant,
      () => x * randomK + randomConstant
    )
    return [`${randomK}x ${sign} ${randomConstant} = ${result} `, x]
  }
  HardEquation(): ReturnEquationT {
    return ['', 0]
  } // Unimplemented
  ImpossibleEquation(): ReturnEquationT {
    return ['', 0]
  } // Unimplemented
}
