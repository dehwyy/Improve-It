import { Difficulties, Modes } from '@/types/export'
import { getBotTime } from '@/app/utils/tools/equations/bot/BotModule'

export default function useBotTime(mode: Modes, difficulty: Difficulties, count: number): number[] {
  return getBotTime(mode, difficulty, count)
}
