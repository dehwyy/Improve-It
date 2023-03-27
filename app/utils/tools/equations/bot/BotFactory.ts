import { IBotKind } from '@/app/utils/tools/equations/types'

export default class BotFactory implements IBotKind {
  constructor(private EquationKind: IBotKind) {}

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
