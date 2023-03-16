import { useUserStore } from '@/app/utils/store/globalStore'
import { shallow } from 'zustand/shallow'
import { Varela_Round } from '@next/font/google'

const LangItemFont = Varela_Round({
  weight: '400',
  subsets: ['latin'],
})

interface IProps {
  isWindowVisible: boolean
  closeWindow: () => void
}

const LanguageSelector: React.FC<IProps> = ({ isWindowVisible }) => {
  const [languages, setLanguage] = useUserStore(state => [state.allLanguages, state.changeLang], shallow)
  return (
    <div
      style={{ borderRadius: 0 }}
      className={`${
        isWindowVisible ? 'visible opacity-100' : 'invisible opacity-0'
      } transition-all duration-300 right-[50%] translate-x-1/2 absolute top-[45px] block-neo-style z-50 usm:right-[100%]`}>
      {languages.map((lang, i) => (
        <div
          key={i}
          onClick={() => setLanguage(lang)}
          className={`${LangItemFont.className} cursor-pointer transition-all bg-violet-600 hover:bg-blue-500 p-5 text-2xl text-center`}>
          {lang.toUpperCase()}
        </div>
      ))}
    </div>
  )
}

export default LanguageSelector
