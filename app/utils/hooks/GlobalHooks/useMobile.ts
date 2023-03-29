import { useMediaQuery } from '@mui/material'

export default function useMobile() {
  const isMobile = useMediaQuery('(max-width:639px)')
  return {
    isMobile,
  }
}
