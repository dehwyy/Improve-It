import { describe, expect, test } from 'vitest'
import RandomModule from '@/app/utils/tools/RandomModule'

const randomValueCheckerTrue = (num1: number, num2: number, k: number = 1) => {
  const randomValue = RandomModule.getRandomInRange(num1, num2, k)
  const [max, min] = [Math.max(num1, num2), Math.min(num1, num2)]
  expect(randomValue).toBeGreaterThanOrEqual(min * k)
  expect(randomValue).toBeLessThanOrEqual(max * k)
  expect(Math.abs((randomValue as number) % k)).toBe(0)
}

const randomValueCheckerNull = (num1: number, num2: number, k: number = 1) => {
  const randomValue = RandomModule.getRandomInRange(num1, num2, k)
  expect(randomValue).toBeNull()
}

describe('utils test', () => {
  test('random: range with coefficient = 1', () => {
    randomValueCheckerTrue(1, 7)
    randomValueCheckerTrue(100, 500)
    randomValueCheckerTrue(1, 2)
    randomValueCheckerTrue(5, 100)
    randomValueCheckerTrue(1000, 2000)
    randomValueCheckerTrue(-2, 2)
    randomValueCheckerTrue(-1000, 500)
    randomValueCheckerTrue(-1000, -2, 132)
    randomValueCheckerTrue(-1, 0)
    randomValueCheckerTrue(500, 250)
    randomValueCheckerTrue(1000, 1)
    randomValueCheckerTrue(100000, -1000)
    randomValueCheckerTrue(0, 0)
    randomValueCheckerTrue(10000000000, 20000000000)
  })
  test('random: range with coefficient gte 1', () => {
    randomValueCheckerTrue(1, 7, 100)
    randomValueCheckerTrue(100, 500, 2)
    randomValueCheckerTrue(100, 500, 2)
    randomValueCheckerTrue(500, 250, 3)
    randomValueCheckerTrue(1000, 1, 5)
    randomValueCheckerTrue(100000, -1000, 111)
    randomValueCheckerTrue(1, 2, 727)
    randomValueCheckerTrue(5, 100, 18732)
    randomValueCheckerTrue(1000, 2000, 18938)
    randomValueCheckerTrue(-2, 2, 12833)
    randomValueCheckerTrue(-1000, 500, 123)
    randomValueCheckerTrue(-1000, -2)
    randomValueCheckerTrue(-1, 0, 90123)
    randomValueCheckerTrue(0, 0, 19191)
    randomValueCheckerTrue(10000000000, 20000000000)
  })
  test('random: range null cases', () => {
    randomValueCheckerNull(1, 10, 0.99)
    randomValueCheckerNull(-10, 10, 0.99)
    randomValueCheckerNull(0, 0, 0.5)
    randomValueCheckerNull(-10, -1, 0.2)
    randomValueCheckerNull(-10, -1, -0.0001)
    randomValueCheckerNull(-10, -1, -0.1)
    randomValueCheckerNull(1, 10, 0.99)
    randomValueCheckerNull(1, 10, -1000)
    randomValueCheckerNull(-100, 100, -1000)
    randomValueCheckerNull(-100, -200, -1111111111)
  })
  test('random: common array', () => {
    const arraysToTest = [
      [1, 2, 3, 4, 5],
      [0, -1, 1, -39130311391, 3871231],
      [-1383, 8965, -9130, -1, -22],
      [90, 113, 911, -233, 5],
      [-1312983, 24892, 0, 39813190, 10],
    ]
    for (const array of arraysToTest) {
      expect(array.includes(RandomModule.getRandomFromArray<number>(array) as number)).toBeTruthy()
    }
  })
  test('random: single item array', () => {
    const arrayTheirItemsWillBeSingleArray = [1, -123, 0, -1, 13907618313, -1317839131]
    for (const item of arrayTheirItemsWillBeSingleArray) {
      const singleArray = [item]
      expect(RandomModule.getRandomFromArray<number>(singleArray)).toBe(item)
    }
  })
  test('random: void array', () => {
    const zeroArray = [] as unknown[]
    for (let i = 0; i < 5; i++) {
      expect(RandomModule.getRandomFromArray<unknown, null>(zeroArray)).toBeNull()
    }
  })
})
