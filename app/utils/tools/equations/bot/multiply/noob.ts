import BotTemplate from '@/app/utils/tools/equations/bot/BotTemplate'
import RandomModule from '@/app/utils/tools/RandomModule'
export default new BotTemplate(RandomModule, {
  round: 2,
  k: [
    { min: 10, max: 20 },
    { min: 30, max: 60 },
    { min: 120, max: 360 },
    { min: 360, max: 720 },
  ],
})
