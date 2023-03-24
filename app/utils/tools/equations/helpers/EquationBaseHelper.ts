import type { IEquationBaseHelper } from '@/app/utils/tools/equations/types'
import type { IRandomModule } from '@/app/utils/tools/types'

export default class EquationBaseHelper implements IEquationBaseHelper {
  constructor(protected RandomModule: IRandomModule) {}

  public getRandomFrom = this.RandomModule.getRandomInRange
}
