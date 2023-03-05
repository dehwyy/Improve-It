import type { IEquationKind } from '@/app/utils/tools/equations/types'

export default class EquationFactory implements IEquationKind {
  constructor(private EquationKind: IEquationKind) {}

  EasyEquation() {
    return this.EquationKind.EasyEquation()
  }

  MediumEquation() {
    return this.EquationKind.MediumEquation()
  }
  HardEquation() {
    return this.EquationKind.HardEquation()
  }
  ImpossibleEquation() {
    return this.EquationKind.ImpossibleEquation()
  }
}
