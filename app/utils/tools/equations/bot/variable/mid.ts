import BotTemplate from '@/app/utils/tools/equations/bot/BotTemplate'
import RandomModule from '@/app/utils/tools/RandomModule'
export default new BotTemplate(RandomModule, {
  round: 2,
  k: [
    { min: 0.5, max: 3 },
    { min: 1, max: 3.5 },
    { min: 1000, max: 1000 },
    { min: 1000, max: 1000 },
  ],
})
