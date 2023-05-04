import BotFactory from '@/app/utils/tools/equations/bot/BotFactory'
import { BotDifficulties, Difficulties, Modes } from '@/types/export'
import BotPlusMinus from '@/app/utils/tools/equations/bot/plusminus/export'
import BotVariable from '@/app/utils/tools/equations/bot/variable/export'
import BotMultiply from '@/app/utils/tools/equations/bot/multiply/export'
import { IBotKind } from '@/app/utils/tools/equations/types'

function getBotByMode(mode: Modes, botDifficulty: BotDifficulties) {
  switch (mode) {
    case Modes.PlusMinus:
      return BotPlusMinus[botDifficulty]
    case Modes.Variable:
      return BotVariable[botDifficulty]
    case Modes.Multiply:
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

export function getBotTime(mode: Modes | null, diff: Difficulties | null, botDifficulty: BotDifficulties | null): () => number {
  if (!mode || !diff || !botDifficulty) return () => 0
  const Bot = new BotFactory(getBotByMode(mode, botDifficulty))
  return () => getBotDifficulty(diff, Bot)
}
