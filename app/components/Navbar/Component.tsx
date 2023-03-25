'use client'
import { memo, useEffect } from 'react'
import { AvailableLanguages, useUserSettingsStore, useUserStore } from '@/app/utils/store/globalStore'
import { shallow } from 'zustand/shallow'
import { useMediaQuery } from '@mui/material'
import DefaultNavbar from '@/app/components/Navbar/DefaultNavbar'
import MobileNavbar from '@/app/components/Navbar/MobileNavbar'

interface IProps {
  userId: string
}

const Navbar = ({ userId }: IProps) => {
  const [allLanguages, setLanguage] = useUserSettingsStore(state => [state.allLanguages, state.changeLang], shallow)
  const setUserId = useUserStore(state => state.setUserId)
  useEffect(() => {
    setUserId(userId)
    for (const language of navigator.languages) {
      if (allLanguages.includes(language as AvailableLanguages)) {
        setLanguage(language as AvailableLanguages)
      }
    }
  }, [])
  const isPhone = useMediaQuery('(min-width:639px)')
  return isPhone ? <DefaultNavbar userId={userId} /> : <MobileNavbar userId={userId} />
}

export default memo(Navbar)
