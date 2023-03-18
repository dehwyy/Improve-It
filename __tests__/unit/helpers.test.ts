import { describe, expect, test, vi } from 'vitest'
import EquationBaseHelper from '@/app/utils/tools/equations/helpers/EquationBaseHelper'
import RandomModule from '@/app/utils/tools/RandomModule'
import PlusMinusHelper from '@/app/utils/tools/equations/helpers/PlusMinusHelper'
import { Signs } from '@/app/utils/tools/equations/types'

describe('BaseHelperTest tests', () => {
  const randomValueCheckerTrue = (num1: number, num2: number, k: number = 1) => {
    const BaseHelper = new EquationBaseHelper(RandomModule)
    const randomValue = BaseHelper.getRandomFrom(num1, num2, k)
    const [max, min] = [Math.max(num1, num2), Math.min(num1, num2)]
    expect(randomValue).toBeGreaterThanOrEqual(min * k)
    expect(randomValue).toBeLessThanOrEqual(max * k)
    expect(Math.abs((randomValue as number) % k)).toBe(0)
  }
  test('EquationBaseHelper: get random', () => {
    randomValueCheckerTrue(2, 6)
    randomValueCheckerTrue(1001, 5001)
    randomValueCheckerTrue(2, 21)
    randomValueCheckerTrue(3, 110)
    randomValueCheckerTrue(10001, 12000)
    randomValueCheckerTrue(-3, 3)
    randomValueCheckerTrue(-10001, 5001)
    randomValueCheckerTrue(-1, 0)
    randomValueCheckerTrue(5001, 2501)
    randomValueCheckerTrue(10001, 1)
    randomValueCheckerTrue(1000010, -11000)
    randomValueCheckerTrue(0, 0)
  })
})
describe('PlusMinusHelper tests', () => {
  const getRandomSign = () => {
    const helper = new PlusMinusHelper(RandomModule)
    expect([Signs.minus, Signs.plus] as Signs[]).toContain(helper.getRandomSign())
  }
  const getRandomSignAndSolveCallback = (givenSign?: Signs) => {
    const helper = new PlusMinusHelper(RandomModule)
    const plusCallback = () => 727 + 272
    const plusResult = 999
    const minusCallback = () => 727 - 272
    const minusResult = 455
    const spy = vi.spyOn(helper, 'getRandomSign')
    givenSign && spy.mockImplementation(() => givenSign)
    const { sign, result } = helper.generatePlusOrMinusAndGetResult(minusCallback, plusCallback)
    if (givenSign) {
      expect(givenSign).toBe(sign)
      if (sign == Signs.plus) {
        expect(result).toBe(plusResult)
      } else if (sign == Signs.minus) {
        expect(result).toBe(minusResult)
      }
    } else {
      expect([Signs.plus, Signs.minus] as Signs[]).toContain(sign)
      expect([plusResult, minusResult] as [typeof plusResult, typeof minusResult]).toContain(result)
    }
    expect(spy).toHaveBeenCalledOnce()
  }
  test('randomSign', () => {
    getRandomSign()
    getRandomSign()
    getRandomSign()
  })
  test('get random sign and do cb with solving', () => {
    getRandomSignAndSolveCallback()
    getRandomSignAndSolveCallback()
    getRandomSignAndSolveCallback(Signs.minus)
    getRandomSignAndSolveCallback(Signs.minus)
    getRandomSignAndSolveCallback(Signs.plus)
    getRandomSignAndSolveCallback(Signs.plus)
  })
})
