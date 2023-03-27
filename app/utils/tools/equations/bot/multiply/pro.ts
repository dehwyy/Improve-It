import BotTemplate from '@/app/utils/tools/equations/bot/BotTemplate'
import RandomModule from '@/app/utils/tools/RandomModule'
export default new BotTemplate(RandomModule, {
  round: 2,
  k: [
    { min: 0.7, max: 2.5 },
    { min: 5, max: 12 },
    { min: 12, max: 20 },
    { min: 120, max: 180 },
  ],
})
