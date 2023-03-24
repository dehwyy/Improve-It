import type { IBotKind } from '@/app/utils/tools/equations/types'
import type { IRandomModule } from '@/app/utils/tools/types'

export default class BotPlusMinus implements IBotKind {
  constructor(private rand: IRandomModule) {}
  EasyEquation() {
    return this.rand.getRandomWithCoefficientRounded(200, 2)
  }
  MediumEquation() {
    return this.rand.getRandomWithCoefficientRounded(200, 2)
  }
  HardEquation() {
    return this.rand.getRandomWithCoefficientRounded(200, 2)
  }
  ImpossibleEquation() {
    return this.rand.getRandomWithCoefficientRounded(200, 2)
  }
}
