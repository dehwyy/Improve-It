import VariableEquation from '@/app/utils/tools/equations/kinds/variable'
import PlusMinusHelper from '@/app/utils/tools/equations/helpers/PlusMinusHelper'
import RandomModule from '@/app/utils/tools/RandomModule'
import EquationFactory from '@/app/utils/tools/equations/EquationFactory'
import { ReturnEquationT } from '@/app/utils/tools/equations/types'
import PlusMinusEquation from '@/app/utils/tools/equations/kinds/plusminus'
import MultiplyEquation from '@/app/utils/tools/equations/kinds/multiply'
import EquationBaseHelper from '@/app/utils/tools/equations/helpers/EquationBaseHelper'
import { Difficulties, Modes } from '@/types/export'

const Variable = () => new VariableEquation(new PlusMinusHelper(RandomModule))
const PlusMinus = () => new PlusMinusEquation(new PlusMinusHelper(RandomModule))
const Multiply = () => new MultiplyEquation(new EquationBaseHelper(RandomModule))

function GetEquationFromMode(mode: Modes) {
  switch (mode) {
    case Modes.PlusMinus:
      return PlusMinus()
    case Modes.Variable:
      return Variable()
    case Modes.Multiply:
      return Multiply()
  }
}
export function* getEquations(mode: Modes, diff: Difficulties, count: number): Generator<ReturnEquationT, void> {
  let localCount = 0
  const Equation = new EquationFactory(GetEquationFromMode(mode))
  while (localCount < count) {
    localCount++
    switch (diff) {
      case Difficulties.Easy:
        yield Equation.EasyEquation()
        break
      case Difficulties.Medium:
        yield Equation.MediumEquation()
        break
      case Difficulties.Hard:
        yield Equation.HardEquation()
        break
      case Difficulties.Impossible:
        yield Equation.ImpossibleEquation()
        break
    }
  }
}
