import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface ISolveLanguages {
  step1: string
  step2: string
}

const solveLanguages = {
  eng: {
    step1: 'Select mode',
    step2: 'Set up',
  },
  ru: {
    step1: 'Выбрать мод',
    step2: 'Настройка параметров',
  },
} as Record<AvailableLanguages, ISolveLanguages>

export default solveLanguages
