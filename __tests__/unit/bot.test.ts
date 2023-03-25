import { describe, expect, test } from 'vitest'
import { getBotTime } from '@/app/utils/tools/equations/bot/BotModule'
import { BotDifficulties, Difficulties, Modes } from '@/types/export'

interface IArgs {
  value: number
  min: number
  max: number
}

function toBeInRange({ value, min, max }: IArgs) {
  expect(value).toBeGreaterThanOrEqual(min)
  expect(value).lessThanOrEqual(max)
}

interface ICreateBotArgs {
  mode: Modes
  botDifficulty: BotDifficulties
}

function createBot({ mode, botDifficulty }: ICreateBotArgs) {
  const noobEasy = getBotTime(mode, Difficulties.Easy, botDifficulty)
  const noobMedium = getBotTime(mode, Difficulties.Medium, botDifficulty)
  const noobHard = getBotTime(mode, Difficulties.Hard, botDifficulty)
  const noobImpossible = getBotTime(mode, Difficulties.Impossible, botDifficulty)
  return {
    easy: noobEasy,
    medium: noobMedium,
    hard: noobHard,
    impossible: noobImpossible,
  }
}

describe('Bot: Plusminus', () => {
  test('Plusminus: noob', () => {
    const { easy, hard, medium, impossible } = createBot({ mode: Modes.plusminus, botDifficulty: BotDifficulties.Noob })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 8, max: 15 })
      toBeInRange({ value: medium(), min: 17, max: 30 })
      toBeInRange({ value: hard(), min: 60, max: 120 })
      toBeInRange({ value: impossible(), min: 120, max: 180 })
    }
  })
  test('Plusminus: mid', () => {
    const { easy, hard, medium, impossible } = createBot({ mode: Modes.plusminus, botDifficulty: BotDifficulties.Mid })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 1, max: 3 })
      toBeInRange({ value: medium(), min: 3, max: 6 })
      toBeInRange({ value: hard(), min: 12, max: 25 })
      toBeInRange({ value: impossible(), min: 60, max: 120 })
    }
  })
  test('Plusminus: pro', () => {
    const { easy, hard, medium, impossible } = createBot({ mode: Modes.plusminus, botDifficulty: BotDifficulties.Pro })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 0.5, max: 2 })
      toBeInRange({ value: medium(), min: 2, max: 5 })
      toBeInRange({ value: hard(), min: 7, max: 10 })
      toBeInRange({ value: impossible(), min: 25, max: 50 })
    }
  })
})
describe('Bot: Multiply', () => {
  test('Plusminus: noob', () => {
    const { easy, hard, medium, impossible } = createBot({ mode: Modes.multiply, botDifficulty: BotDifficulties.Noob })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 10, max: 20 })
      toBeInRange({ value: medium(), min: 30, max: 60 })
      toBeInRange({ value: hard(), min: 120, max: 360 })
      toBeInRange({ value: impossible(), min: 360, max: 720 })
    }
  })
  test('Plusminus: mid', () => {
    const { easy, hard, medium, impossible } = createBot({ mode: Modes.multiply, botDifficulty: BotDifficulties.Mid })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 1.5, max: 3.5 })
      toBeInRange({ value: medium(), min: 10, max: 20 })
      toBeInRange({ value: hard(), min: 25, max: 45 })
      toBeInRange({ value: impossible(), min: 180, max: 360 })
    }
  })
  test('Plusminus: pro', () => {
    const { easy, hard, medium, impossible } = createBot({ mode: Modes.multiply, botDifficulty: BotDifficulties.Pro })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 0.7, max: 2.5 })
      toBeInRange({ value: medium(), min: 5, max: 12 })
      toBeInRange({ value: hard(), min: 12, max: 20 })
      toBeInRange({ value: impossible(), min: 120, max: 180 })
    }
  })
})
describe('Bot: Variable', () => {
  test('Variable: noob', () => {
    const { easy, medium } = createBot({ mode: Modes.variable, botDifficulty: BotDifficulties.Noob })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 6, max: 15 })
      toBeInRange({ value: medium(), min: 8, max: 20 })
    }
  })
  test('Variable: mid', () => {
    const { easy, medium } = createBot({ mode: Modes.variable, botDifficulty: BotDifficulties.Mid })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 0.5, max: 3 })
      toBeInRange({ value: medium(), min: 1, max: 3.5 })
    }
  })
  test('Variable: pro', () => {
    const { easy, medium } = createBot({ mode: Modes.variable, botDifficulty: BotDifficulties.Pro })
    for (let i = 0; i < 20; i++) {
      toBeInRange({ value: easy(), min: 0.2, max: 2 })
      toBeInRange({ value: medium(), min: 1, max: 1.5 })
    }
  })
})
