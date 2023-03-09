//@ts-nocheck
import type { IRandomModule } from '@/app/utils/tools/equations/types'
import EquationBaseHelper from '@/app/utils/tools/equations/helpers/EquationBaseHelper'

// Should ALWAYS extend EquationBaseHelper and implement custom interface,
// that you should create in equations/types.ts and export it (export interface ... {}),
// that interface would be used in equation/kinds/**.ts as injection
// Remind: If you're using helper in EquationKind,
// you should always inject in Helper RandomModule that have similar field as IRandomModule interface
export default class PlusMinusHelper extends EquationBaseHelper implements 'RandomInterface' {
  constructor(protected RandomModule: IRandomModule) {
    super(RandomModule)
  }

  public example__getRandomChar(): any {
    return 'any implementation'
  }

  public __example(...args: any[]): Array<any> {
    return args
  }
}
