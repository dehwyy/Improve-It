import Options from '@mui/icons-material/Dehaze'
import { useNavbarStore } from '@/app/utils/store/componentsStore'

const ExpandNavbar = () => {
  const setExpanded = useNavbarStore(state => state.setIsOpen)
  return <Options className="usm:hidden" sx={{ cursor: 'pointer' }} onClick={() => setExpanded()} />
}

export default ExpandNavbar
