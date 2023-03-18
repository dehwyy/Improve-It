import type { IPlusMinusHelper, IRandomModule } from '@/app/utils/tools/equations/types'
import { Signs } from '@/app/utils/tools/equations/types'
import EquationBaseHelper from '@/app/utils/tools/equations/helpers/EquationBaseHelper'

export default class PlusMinusHelper extends EquationBaseHelper implements IPlusMinusHelper {
  constructor(protected RandomModule: IRandomModule) {
    super(RandomModule)
  }

  public getRandomSign(): Signs {
    return this.RandomModule.getRandomFromArray<Signs>([Signs.plus, Signs.minus])
  }

  public generatePlusOrMinusAndGetResult(minusCb: () => number, plusCb: () => number): { sign: string; result: number } {
    const sign = this.getRandomSign()
    const result = (function () {
      if (sign === Signs.minus) {
        return minusCb()
      } else {
        return plusCb()
      }
    })()
    return {
      result,
      sign,
    }
  }
}
