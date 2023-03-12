import LanguageIconMui from '@mui/icons-material/Language'
import LanguageSelector from '@/app/components/Navbar/LanguageSelector'
import { useLanguageSelectorStore } from '@/app/utils/store/componentsStore'
import { shallow } from 'zustand/shallow'
const LanguageIcon = () => {
  const [windowState, setWindowState] = useLanguageSelectorStore(state => [state.isOpened, state.setOpened], shallow)
  return (
    <div className="relative">
      <LanguageIconMui sx={{ cursor: 'pointer' }} fontSize="large" onClick={() => setWindowState(!windowState)} />
      <LanguageSelector />
    </div>
  )
}

export default LanguageIcon
