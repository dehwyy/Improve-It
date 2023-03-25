import Noob from '@/app/utils/tools/equations/bot/variable/noob'
import Mid from '@/app/utils/tools/equations/bot/variable/mid'
import Pro from '@/app/utils/tools/equations/bot/variable/pro'
import { BotDifficulties } from '@/types/export'
import { IBotKind } from '@/app/utils/tools/equations/types'

export default {
  Noob,
  Mid,
  Pro,
} as Record<BotDifficulties, IBotKind>
