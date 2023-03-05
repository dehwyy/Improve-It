import { describe, expect, test } from 'vitest'
import RandomModule from '@/app/utils/tools/RandomModule'

const randomValueCheckerTrue = (num1: number, num2: number) => {
  const randomValue = RandomModule.getRandomInRange(num1, num2)
  expect(randomValue).toBeGreaterThanOrEqual(num1)
  expect(randomValue).toBeLessThanOrEqual(num2)
}

const randomValueCheckerFalse = (num1: number, num2: number) => {
  const randomValue = RandomModule.getRandomInRange(num1, num2)
  expect(randomValue).not.toBeGreaterThanOrEqual(num1 + num2)
}

describe('utils test', () => {
  test('random int true', () => {
    randomValueCheckerTrue(1, 7)
    randomValueCheckerTrue(100, 500)
    randomValueCheckerTrue(1, 2)
  })
  test('random int false', () => {
    randomValueCheckerFalse(1, 7)
    randomValueCheckerFalse(100, 500)
    randomValueCheckerFalse(1, 2)
    randomValueCheckerFalse(100, 5)
  })
  test('random from array', () => {
    const arraySimple = [1, 2, 3, 4, 5]
    const arrayOneElement = [1]
    const arrayVoid = [] as unknown[]
    expect(arraySimple.includes(RandomModule.getRandomFromArray<number>(arraySimple) as number)).toBeTruthy()
    expect(RandomModule.getRandomFromArray<number>(arrayOneElement)).toBe(1)
    expect(RandomModule.getRandomFromArray<unknown, null>(arrayVoid)).toBeNull()
  })
})
