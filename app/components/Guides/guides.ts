import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface IGuide {
  header: string
}

const GuidesLanguages = {
  eng: {
    header: 'How to use this app',
  },
  ru: {
    header: 'Как использовать это приложение',
  },
} as Record<AvailableLanguages, IGuide>

export default GuidesLanguages
