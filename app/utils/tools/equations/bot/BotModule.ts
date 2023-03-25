import BotFactory from '@/app/utils/tools/equations/bot/BotFactory'
import { BotDifficulties, Difficulties, Modes } from '@/types/export'
import BotPlusMinus from '@/app/utils/tools/equations/bot/plusminus/export'
import BotVariable from '@/app/utils/tools/equations/bot/variable/export'
import BotMultiply from '@/app/utils/tools/equations/bot/multiply/export'
import { IBotKind } from '@/app/utils/tools/equations/types'

function getBotByMode(mode: Modes, botDifficulty: BotDifficulties) {
  switch (mode) {
    case Modes.plusminus:
      return BotPlusMinus[botDifficulty]
    case Modes.variable:
      return BotVariable[botDifficulty]
    case Modes.multiply:
      return BotMultiply[botDifficulty]
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

export function getBotTime(mode: Modes, diff: Difficulties, botDifficulty: BotDifficulties): () => number {
  const Bot = new BotFactory(getBotByMode(mode, botDifficulty))
  return () => getBotDifficulty(diff, Bot)
}
