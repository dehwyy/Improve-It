import type { IBotKind } from '@/app/utils/tools/equations/types'
import type { IRandomModule } from '@/app/utils/tools/types'

interface IArgs {
  round: number
  k: { min: number; max: number }[]
}

export default class BotTemplate implements IBotKind {
  constructor(private rand: IRandomModule, private args: IArgs) {}
  EasyEquation() {
    return this.rand.getRandomWithFloor(this.args.k[0].min, this.args.k[0].max, this.args.round)
  }
  MediumEquation() {
    return this.rand.getRandomWithFloor(this.args.k[1].min, this.args.k[1].max, this.args.round)
  }
  HardEquation() {
    return this.rand.getRandomWithFloor(this.args.k[2].min, this.args.k[2].max, this.args.round)
  }
  ImpossibleEquation() {
    return this.rand.getRandomWithFloor(this.args.k[3].min, this.args.k[3].max, this.args.round)
  }
}
