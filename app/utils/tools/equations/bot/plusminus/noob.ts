import BotTemplate from '@/app/utils/tools/equations/bot/BotTemplate'
import RandomModule from '@/app/utils/tools/RandomModule'
export default new BotTemplate(RandomModule, {
  round: 2,
  k: [
    { min: 8, max: 15 },
    { min: 17, max: 30 },
    { min: 60, max: 120 },
    { min: 120, max: 180 },
  ],
})
