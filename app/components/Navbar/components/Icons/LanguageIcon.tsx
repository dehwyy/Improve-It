import LanguageIconMui from '@mui/icons-material/Translate'
import LanguageSelector from '@/app/components/Navbar/components/LanguageSelector'
import { useState } from 'react'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import NavItemWrapper from '@/app/components/Navbar/components/Icons/_components/NavItemWrapper'
const LanguageIcon = () => {
  const [windowState, setWindowState] = useState(false)
  return (
    <NavItemWrapper text="Language">
      <div className="relative">
        <ClickAwayListener onClickAway={() => setWindowState(false)}>
          <LanguageIconMui sx={{ cursor: 'pointer' }} onClick={() => setWindowState(!windowState)} />
        </ClickAwayListener>
        <LanguageSelector closeWindow={() => setWindowState(false)} isWindowVisible={windowState} />
      </div>
    </NavItemWrapper>
  )
}

export default LanguageIcon
