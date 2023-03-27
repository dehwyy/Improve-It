import Noob from '@/app/utils/tools/equations/bot/multiply/noob'
import Mid from '@/app/utils/tools/equations/bot/multiply/mid'
import Pro from '@/app/utils/tools/equations/bot/multiply/pro'
import { BotDifficulties } from '@/types/export'
import { IBotKind } from '@/app/utils/tools/equations/types'

export default {
  Noob,
  Mid,
  Pro,
} as Record<BotDifficulties, IBotKind>
