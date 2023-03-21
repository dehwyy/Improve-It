import { AvailableLanguages } from '@/app/utils/store/globalStore'

interface IGuide {
  header: string
}

const GuidesLanguages = {
  eng: {
    header: 'Improve your mental calculator',
  },
  ru: {
    header: 'Открой в себе гения',
  },
} as Record<AvailableLanguages, IGuide>

export default GuidesLanguages
