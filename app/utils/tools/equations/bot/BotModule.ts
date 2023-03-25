import BotFactory from '@/app/utils/tools/equations/bot/BotFactory'
import { Difficulties, Modes } from '@/types/export'
import BotPlusMinus from '@/app/utils/tools/equations/bot/bot-plusminus'
import RandomModule from '@/app/utils/tools/RandomModule'
import { IBotKind } from '@/app/utils/tools/equations/types'

function getBotByMode(mode: Modes) {
  switch (mode) {
    case Modes.plusminus:
      return new BotPlusMinus(RandomModule)
    case Modes.variable:
      return new BotPlusMinus(RandomModule)
    case Modes.multiply:
      return new BotPlusMinus(RandomModule)
  }
}

function getBotDifficulty(diff: Difficulties, selectedBot: IBotKind) {
  const bot = new BotFactory(selectedBot)
  switch (diff) {
    case Difficulties.Easy:
      return bot.EasyEquation()
    case Difficulties.Medium:
      return bot.MediumEquation()
    case Difficulties.Hard:
      return bot.HardEquation()
    case Difficulties.Impossible:
      return bot.ImpossibleEquation()
  }
}

export function getBotTime(mode: Modes, diff: Difficulties, count: number): () => number {
  const Bot = new BotFactory(getBotByMode(mode))
  return () => getBotDifficulty(diff, Bot)
}
