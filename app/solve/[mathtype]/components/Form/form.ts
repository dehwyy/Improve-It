import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface IForm {
  Difficulties: {
    ease: string
    medium: string
    hard: string
    impossible: string
    label: string
  }
  countLabel: string
  regenerate: string
}

const SolveFormLanguages = {
  eng: {
    Difficulties: {
      ease: 'Ease',
      medium: 'Medium',
      hard: 'Hard',
      impossible: 'Impossible',
      label: 'Difficulty',
    },
    countLabel: `Equation's count`,
    regenerate: 'Regenerate',
  },
  ru: {
    Difficulties: {
      ease: 'Легкая',
      medium: 'Средняя',
      hard: 'Трудная',
      impossible: 'Невозможная',
      label: 'Сложность',
    },
    countLabel: `Количество`,
    regenerate: 'Сгенерировать',
  },
} as Record<AvailableLanguages, IForm>

export default SolveFormLanguages
