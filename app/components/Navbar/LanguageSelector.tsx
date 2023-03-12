import { useUserStore } from '@/app/utils/store/globalStore'
import { shallow } from 'zustand/shallow'
import { Varela_Round } from '@next/font/google'
import { useLanguageSelectorStore } from '@/app/utils/store/componentsStore'

const LangItemFont = Varela_Round({
  weight: '400',
  subsets: ['latin'],
})
const LanguageSelector = () => {
  const [languages, setLanguage] = useUserStore(state => [state.allLanguages, state.changeLang], shallow)
  const [windowState, setWindowState] = useLanguageSelectorStore(state => [state.isOpened, state.setOpened], shallow)
  return (
    <div
      style={{ borderRadius: 0 }}
      className={`${
        windowState ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-all duration-300 right-[50%] translate-x-1/2 absolute top-[68px] block-neo-style z-50 usm:right-[100%]`}>
      {languages.map((lang, i) => (
        <div
          key={i}
          onClick={() => {
            setLanguage(lang)
            setWindowState(false)
          }}
          className={`${LangItemFont.className} cursor-pointer transition-all bg-white hover:bg-custom-blue p-5 text-2xl text-center`}>
          {lang.toUpperCase()}
        </div>
      ))}
    </div>
  )
}

export default LanguageSelector
