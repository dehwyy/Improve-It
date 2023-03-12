import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface IErrors {
  auth: {
    please: string
    authorize: string
    toSubmit: string
  }
  allSubmit: {
    allow: string
    all: string
    equations: string
  }
}

const ErrorsLanguages = {
  eng: {
    auth: {
      please: 'Please',
      authorize: 'authorize',
      toSubmit: 'to submit score!',
    },
    allSubmit: {
      allow: 'You can only submit when solve ',
      all: 'all',
      equations: 'the equations!',
    },
  },
  ru: {
    auth: {
      please: 'Пожалуйста,',
      authorize: 'авторизуйтесь,',
      toSubmit: 'чтобы отправить результат!',
    },
    allSubmit: {
      allow: 'Вы можете отправить результат, только когда решите ',
      all: 'все',
      equations: 'уравнения!',
    },
  },
} as Record<AvailableLanguages, IErrors>

export default ErrorsLanguages
