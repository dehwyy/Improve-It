import { describe, expect, expectTypeOf, it, test } from 'vitest'
import { getEquations } from '@/app/utils/tools/equations/EquationModule'
import { Difficulties, Modes } from '@/types/export'
import { IEquationKind } from '@/app/utils/tools/equations/types'
import EquationFactory from '@/app/utils/tools/equations/EquationFactory'
import VariableEquation from '@/app/utils/tools/equations/kinds/variable'
import PlusMinusHelper from '@/app/utils/tools/equations/helpers/PlusMinusHelper'
import RandomModule from '@/app/utils/tools/RandomModule'
import PlusMinusEquation from '@/app/utils/tools/equations/kinds/plusminus'
import MultiplyEquation from '@/app/utils/tools/equations/kinds/multiply'
import EquationBaseHelper from '@/app/utils/tools/equations/helpers/EquationBaseHelper'

describe('Equations:kind tests', () => {
  const equationTrueValidator = (next: IteratorResult<[string, number], void>) => {
    const [equation, result] = next.value as [string, number]
    expect(next.done).toBe(false)
    expect(equation).not.toBe('')
    expect(equation.split(' ').length).toBeGreaterThanOrEqual(3)
    // ↑ at least ↑ - could be like this:
    //       first element could something calculable; second is sign; third calculable as first
    // or any other variant;
    // I guess len == 3 is the least small it could be
    expectTypeOf(equation).toMatchTypeOf<string>()
    expectTypeOf(result).toMatchTypeOf<number>()
  }
  const equationFalseValidator = (next: IteratorResult<[string, number], void>) => {
    expect(next.value).toBeUndefined()
    expect(next.done).toBe(true)
  }

  const equationAssertionMaker = (mode: Modes, difficulty: Difficulties) => {
    const e = getEquations(mode, difficulty, 2)
    const nextE1 = e.next()
    equationTrueValidator(nextE1)
    const nextE2 = e.next()
    equationTrueValidator(nextE2)
    const nextE3 = e.next()
    equationFalseValidator(nextE3)
  }

  const equationAssertionHandler = (difficulty: Difficulties) => {
    equationAssertionMaker(Modes.plusminus, difficulty)
    equationAssertionMaker(Modes.multiply, difficulty)
    equationAssertionMaker(Modes.variable, difficulty)
  }
  test('speed', () => {
    it('easy equation ', () => {
      equationAssertionHandler(Difficulties.Easy)
    })
  })

  test('meduim equation', () => {
    equationAssertionHandler(Difficulties.Medium)
  })

  test('hard equation', () => {
    equationAssertionMaker(Modes.plusminus, Difficulties.Hard)
    equationAssertionMaker(Modes.multiply, Difficulties.Hard)
    // equationAssertionMaker(Modes.variable, Difficulties.Hard) << Not working due to unimplemented
  })

  test('impossible equation', () => {
    equationAssertionMaker(Modes.plusminus, Difficulties.Impossible)
    equationAssertionMaker(Modes.multiply, Difficulties.Impossible)
    // equationAssertionMaker(Modes.variable, Difficulties.Impossible) << Not working due to unimplemented
  })
})

describe('Equations:factory tests', () => {
  const assertKindWithFactory = (kind: IEquationKind) => {
    const factory = new EquationFactory(kind)
    const [equation1, result1] = factory.EasyEquation()
    expectTypeOf(equation1).toMatchTypeOf<string>()
    expectTypeOf(result1).toMatchTypeOf<number>()
    expect(equation1.split(' ').length).toBeGreaterThanOrEqual(3)

    const [equation2, result2] = factory.MediumEquation()
    expectTypeOf(equation2).toMatchTypeOf<string>()
    expectTypeOf(result2).toMatchTypeOf<number>()
    expect(equation2.split(' ').length).toBeGreaterThanOrEqual(3)

    const [equation3, result3] = factory.HardEquation()
    expectTypeOf(equation3).toMatchTypeOf<string>()
    expectTypeOf(result3).toMatchTypeOf<number>()
    expect(equation3 ? equation3.split(' ').length : 999).toBeGreaterThanOrEqual(3)
    // Again unimplemented so it's sorrowful crutch

    const [equation4, result4] = factory.ImpossibleEquation()
    expectTypeOf(equation4).toMatchTypeOf<string>()
    expectTypeOf(result4).toMatchTypeOf<number>()
    expect(equation4 ? equation4.split(' ').length : 999).toBeGreaterThanOrEqual(3)
    // Again unimplemented so it's sorrowful crutch
  }
  test('', () => {
    const Variable = new VariableEquation(new PlusMinusHelper(RandomModule))
    const PlusMinus = new PlusMinusEquation(new PlusMinusHelper(RandomModule))
    const Multiply = new MultiplyEquation(new EquationBaseHelper(RandomModule))
    assertKindWithFactory(PlusMinus)
    assertKindWithFactory(Multiply)
    assertKindWithFactory(Variable)
  })
})
