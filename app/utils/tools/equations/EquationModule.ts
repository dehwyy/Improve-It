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

function getEquationKindFromMode(mode: keyof typeof Modes) {
  if (mode === 'variable') {
    return Variable()
  } else if (mode === 'plusminus') {
    return PlusMinus()
  } else if (mode === 'multiply') {
    return Multiply()
  } else {
    return PlusMinus()
  }
}

function alphaGetEquationKindFromMode(mode: AlphaModes) {
  switch (mode) {
    case AlphaModes.plusminus:
      return PlusMinus()
    case AlphaModes.variable:
      return Variable()
    case AlphaModes.multiply:
      return Multiply()
  }
}

export default function* getEquations(mode: keyof typeof Modes, diff: Diffs = 0, count = 1): Generator<ReturnEquationT, void> {
  let localCount = 0
  const Equation = new EquationFactory(getEquationKindFromMode(mode))
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

export function* alphaGetEquations(mode: AlphaModes, diff: AlphaDifficulties, count: number): Generator<ReturnEquationT, void> {
  let localCount = 0
  const Equation = new EquationFactory(alphaGetEquationKindFromMode(mode))
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
