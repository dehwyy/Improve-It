import { AvailableLanguages } from '@/app/utils/store/globalStore'
import { Modes } from '@/types/export'

const MathTypeLanguages = {
  eng: {
    Multiply: 'Multiply',
    Variable: 'Variable',
    'Plus/minus': 'Plus/minus',
  },
  ru: {
    Multiply: 'Умножение',
    Variable: 'Переменная',
    'Plus/minus': 'Плюс/минус',
  },
} as Record<AvailableLanguages, Record<Modes, string>>

export default MathTypeLanguages
