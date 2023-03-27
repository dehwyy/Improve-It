import BotTemplate from '@/app/utils/tools/equations/bot/BotTemplate'
import RandomModule from '@/app/utils/tools/RandomModule'
export default new BotTemplate(RandomModule, {
  round: 2,
  k: [
    { min: 1.5, max: 3.5 },
    { min: 10, max: 20 },
    { min: 25, max: 45 },
    { min: 180, max: 360 },
  ],
})
