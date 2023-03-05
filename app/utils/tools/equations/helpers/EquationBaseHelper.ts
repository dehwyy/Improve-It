import type { IRandomModule, IEquationBaseHelper } from '@/app/utils/tools/equations/types'

export default class EquationBaseHelper implements IEquationBaseHelper {
  constructor(protected RandomModule: IRandomModule) {}

  public getRandomFrom = this.RandomModule.getRandomInRange
}
