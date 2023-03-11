import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface ILeaderboard {
  leaderboard: string
}

const LeaderboardLanguages = {
  eng: {
    leaderboard: 'Leaderboard',
  },
  ru: {
    leaderboard: 'Таблица лидеров',
  },
} as Record<AvailableLanguages, ILeaderboard>

export default LeaderboardLanguages
