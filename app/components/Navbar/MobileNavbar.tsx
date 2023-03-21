'use client'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useEffect, useState } from 'react'
import Icons from '@/app/components/Navbar/components/Icons'
import { Slide } from '@mui/material'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import TopPageLoader from '@/app/components/UI/Global/TopPageLoader'
import { usePathname } from 'next/navigation'
interface IProps {
  userId: string
}

const MobileNavbar = ({ userId }: IProps) => {
  const [isExpanded, setExpanded] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setExpanded(false)
  }, [pathname])
  return (
    <>
      <TopPageLoader />
      <ClickAwayListener onClickAway={() => setExpanded(false)}>
        <nav
          className={`${
            isExpanded ? 'text-black ' : 'text-violet-500'
          } transition-all text-[3rem] flex flex-col items-center z-50 fixed right-0 top-0`}>
          <div className="p-[1rem] pb-0 z-50 ">
            <MenuIcon
              onClick={() => setExpanded(p => !p)}
              fontSize="large"
              className={`transition-all text-[3rem] ${!isExpanded && 'bg-[#333333]'} rounded`}
            />
          </div>
          <Slide in={isExpanded} direction="left" unmountOnExit mountOnEnter>
            <div className="bg-gradient-to-r from-violet-500 to-violet-700 fixed bottom-0 top-0 pt-20 z-40">
              <Icons userId={userId} isGrowable={isExpanded} />
            </div>
          </Slide>
        </nav>
      </ClickAwayListener>
    </>
  )
}

export default MobileNavbar
