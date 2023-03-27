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

export const useUserSettingsStore = create<IUserStore>(set => ({
  lang: '' as AvailableLanguages,
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

interface UserStore {
  userId: string | null
  setUserId: (userId: string | null) => void
}

export const useUserStore = create<UserStore>(set => ({
  userId: null,
  setUserId: userId => set({ userId }),
}))
