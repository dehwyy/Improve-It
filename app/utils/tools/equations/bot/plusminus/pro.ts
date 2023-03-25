import BotTemplate from '@/app/utils/tools/equations/bot/BotTemplate'
import RandomModule from '@/app/utils/tools/RandomModule'
export default new BotTemplate(RandomModule, {
  round: 2,
  k: [
    { min: 0.5, max: 2 },
    { min: 2, max: 5 },
    { min: 7, max: 10 },
    { min: 25, max: 50 },
  ],
})
