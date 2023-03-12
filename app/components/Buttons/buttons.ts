import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface IButtons {
  solve: string
  profile: string
  signIn: string
}

const ButtonsLanguages = {
  eng: {
    profile: 'Profile',
    signIn: 'Sign In',
    solve: 'Solve it!',
  },
  ru: {
    profile: 'Профиль',
    signIn: 'Авторизоваться',
    solve: 'Решать!',
  },
} as Record<AvailableLanguages, IButtons>

export default ButtonsLanguages
