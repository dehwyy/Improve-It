//@ts-nocheck
import type { IRandomModule } from '@/app/utils/tools/equations/types'
import EquationBaseHelper from '@/app/utils/tools/equations/helpers/EquationBaseHelper'

// Should ALWAYS extend EquationBaseHelper and implement CUSTOM interface,
// that you should be created in equations/types.ts and exported (export interface ... {}),
// that interface would be used in equation/kinds/**.ts as injection

// Remind: If you're using helper in EquationKind,
// When creating instance of EquationKind in EquationModule
// You should always inject in Helper RandomModule that have similar field as IRandomModule interface or create new one
// (Not recommend, be better extending existing one and modify IRandomModule fields in types.ts)

// You may have as many injection as you wish but
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
