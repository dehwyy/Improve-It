import BotTemplate from '@/app/utils/tools/equations/bot/BotTemplate'
import RandomModule from '@/app/utils/tools/RandomModule'
export default new BotTemplate(RandomModule, {
  round: 2,
  k: [
    { min: 1, max: 3 },
    { min: 3, max: 6 },
    { min: 12, max: 25 },
    { min: 60, max: 120 },
  ],
})
