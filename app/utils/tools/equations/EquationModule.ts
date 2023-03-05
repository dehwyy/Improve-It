import { Diffs, Modes } from '@/types/export'
import VariableEquation from '@/app/utils/tools/equations/kinds/variable'
import PlusMinusHelper from '@/app/utils/tools/equations/helpers/PlusMinusHelper'
import RandomModule from '@/app/utils/tools/RandomModule'
import EquationFactory from '@/app/utils/tools/equations/EquationFactory'
import { ReturnEquationT } from '@/app/utils/tools/equations/types'
import PlusMinusEquation from '@/app/utils/tools/equations/kinds/plusminus'
import MultiplyEquation from '@/app/utils/tools/equations/kinds/multiply'
import EquationBaseHelper from '@/app/utils/tools/equations/helpers/EquationBaseHelper'

const Variable = () => new VariableEquation(new PlusMinusHelper(RandomModule))
const PlusMinus = () => new PlusMinusEquation(new PlusMinusHelper(RandomModule))
const Multiply = () => new MultiplyEquation(new EquationBaseHelper(RandomModule))
function getEquationKindFromMode(mode: keyof typeof Modes) {
  if (mode === 'variable') {
    return new EquationFactory(Variable())
  } else if (mode === 'plusminus') {
    return new EquationFactory(PlusMinus())
  } else if (mode === 'multiply') {
    return new EquationFactory(Multiply())
  } else {
    return new EquationFactory(PlusMinus())
  }
}

export default function* getEquations(mode: keyof typeof Modes, diff: Diffs = 0, count = 1): Generator<ReturnEquationT, void> {
  let localCount = 0
  const Equation = getEquationKindFromMode(mode)
  console.log(Equation.EasyEquation(), mode)
  while (localCount < count) {
    localCount++
    switch (diff) {
      case Diffs.Easy:
        yield Equation.EasyEquation()
        break
      case Diffs.Medium:
        yield Equation.MediumEquation()
        break
      case Diffs.Hard:
        yield Equation.HardEquation()
        break
      case Diffs.Impossible:
        yield Equation.ImpossibleEquation()
        break
    }
  }
}
