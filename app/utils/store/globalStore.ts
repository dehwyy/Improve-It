import { create } from 'zustand'

export enum AvailableLanguages {
  ru = 'ru',
  eng = 'eng',
}

interface IUserStore {
  lang: AvailableLanguages
  allLanguages: AvailableLanguages[]
  changeLang: (lang: AvailableLanguages) => void
}

export const useUserStore = create<IUserStore>(set => ({
  lang: AvailableLanguages.eng,
  allLanguages: (() => {
    // getting keys of enum AvailableLanguages
    const array = [] as AvailableLanguages[]
    for (const value in AvailableLanguages) {
      array.push(value as AvailableLanguages)
    }
    return array
  })(),
  changeLang: newLang => set({ lang: newLang }),
}))
