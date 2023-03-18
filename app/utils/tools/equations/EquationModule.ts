import { Diffs, Modes } from '@/types/export'
import VariableEquation from '@/app/utils/tools/equations/kinds/variable'
import PlusMinusHelper from '@/app/utils/tools/equations/helpers/PlusMinusHelper'
import RandomModule from '@/app/utils/tools/RandomModule'
import EquationFactory from '@/app/utils/tools/equations/EquationFactory'
import { ReturnEquationT } from '@/app/utils/tools/equations/types'
import PlusMinusEquation from '@/app/utils/tools/equations/kinds/plusminus'
import MultiplyEquation from '@/app/utils/tools/equations/kinds/multiply'
import EquationBaseHelper from '@/app/utils/tools/equations/helpers/EquationBaseHelper'
import { AlphaDifficulties, AlphaModes } from '@/types/alpha-export'

const Variable = () => new VariableEquation(new PlusMinusHelper(RandomModule))
const PlusMinus = () => new PlusMinusEquation(new PlusMinusHelper(RandomModule))
const Multiply = () => new MultiplyEquation(new EquationBaseHelper(RandomModule))

function GetEquationFromMode(mode: AlphaModes) {
  switch (mode) {
    case AlphaModes.plusminus:
      return PlusMinus()
    case AlphaModes.variable:
      return Variable()
    case AlphaModes.multiply:
      return Multiply()
  }
}
export function* getEquations(mode: AlphaModes, diff: AlphaDifficulties, count: number): Generator<ReturnEquationT, void> {
  let localCount = 0
  const Equation = new EquationFactory(GetEquationFromMode(mode))
  while (localCount < count) {
    localCount++
    switch (diff) {
      case AlphaDifficulties.Easy:
        yield Equation.EasyEquation()
        break
      case AlphaDifficulties.Medium:
        yield Equation.MediumEquation()
        break
      case AlphaDifficulties.Hard:
        yield Equation.HardEquation()
        break
      case AlphaDifficulties.Impossible:
        yield Equation.ImpossibleEquation()
        break
    }
  }
}
