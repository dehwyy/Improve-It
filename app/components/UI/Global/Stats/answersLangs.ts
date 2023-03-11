import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface IAnswer {
  correct: string
  wrong: string
}

const AnswersLanguages = {
  eng: {
    correct: 'Correct answers',
    wrong: 'Wrong answers',
  },
  ru: {
    correct: 'Правильные ответы',
    wrong: 'Неправильные ответы',
  },
} as Record<AvailableLanguages, IAnswer>

export default AnswersLanguages
