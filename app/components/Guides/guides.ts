import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface IGuide {
  header: string
  target: string
  modsDescription: string
  modeDiffs: string
  mode1: string
  mode2: string
  mode3: string
  mode4: string
  partingWords: string
}

const GuidesLanguages = {
  eng: {
    header: 'How to use this app',
    target: 'This app is intend to improve your mental calculation',
    modsDescription: 'Currently there are 3 mods: plus minus-calc, multiply calc, linear equation solving',
    modeDiffs: 'Every mode have 4 difficulties:',
    mode1: 'Easy',
    mode2: 'Medium',
    mode3: 'Hard',
    mode4: 'Impossible',
    partingWords: 'You should try to find by yourself difficult that fits your needs',
  },
  ru: {
    header: 'Как использовать это приложение',
    target: 'Это приложение создано для улучшение устного счета',
    modsDescription: 'Сейчас есть 3 вариации: вычисление плюс-минус, умножение и решение линейных уравнений',
    modeDiffs: 'У каждой вариации есть 4 уровня сложности',
    mode1: 'Лёгкая',
    mode2: 'Средняя',
    mode3: 'Сложная',
    mode4: 'Невозможная',
    partingWords: 'Стоит найти самую подходящую для вас сложность и практиковаться на ней',
  },
} as Record<AvailableLanguages, IGuide>

export default GuidesLanguages
