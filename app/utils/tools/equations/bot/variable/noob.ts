import BotTemplate from '@/app/utils/tools/equations/bot/BotTemplate'
import RandomModule from '@/app/utils/tools/RandomModule'
export default new BotTemplate(RandomModule, {
  round: 2,
  k: [
    { min: 6, max: 15 },
    { min: 8, max: 20 },
    { min: 1000, max: 1000 },
    { min: 1000, max: 1000 },
  ],
})
