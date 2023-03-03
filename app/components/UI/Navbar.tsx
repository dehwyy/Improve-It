'use client'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import Options from '@mui/icons-material/Dehaze'
import Link from 'next/link'
import Home from '@mui/icons-material/HomeOutlined'
import SignOut from '@mui/icons-material/ExitToApp'
import { FC, memo, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useNavbarStore } from '@/app/utils/store/componentsStore'
import { shallow } from 'zustand/shallow'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Session } from 'next-auth'

// Timer on this navbar

interface IProps {
  data: Session
}

const Navbar: FC<IProps> = ({ data }) => {
  const [isExpanded, setExpanded] = useNavbarStore(
    state => [state.isOpened, state.setIsOpen],
    shallow
  )
  const nodeRef = useRef(null)
  return (
    <nav className="fixed right-0 top-0 select-none h-[100px] z-50">
      <div className="absolute right-0 flex justify-center"></div>
      <CSSTransition
        in={isExpanded}
        nodeRef={nodeRef}
        timeout={1500}
        classNames="navbar">
        <div
          ref={nodeRef}
          className={
            (isExpanded
              ? 'w-screen visible '
              : 'w-96 rounded-bl-3xl border-l-4 pr-0 ') +
            ' h-[100px] bg-white border-b-4 border-black flex items-center'
          }>
          <div
            className={
              (isExpanded ? 'gap-x-12 justify-evenly ' : 'justify-evenly ') +
              'gap-x-1 flex w-full transition-all duration-[1500ms]'
            }>
            <Link href="/">
              <Home sx={{ cursor: 'pointer' }} fontSize="large" />
            </Link>
            <Link href={data?.user ? `user/${data.user.name}` : ''}>
              <PermIdentityIcon
                onClick={() => {
                  !data?.user && signIn()
                }}
                sx={{ cursor: 'pointer' }}
                fontSize="large"
              />
            </Link>
            {data?.user && (
              <SignOut
                onClick={() => signOut()}
                sx={{ cursor: 'pointer' }}
                fontSize="large"
              />
            )}
            <Options
              sx={{ cursor: 'pointer' }}
              fontSize="large"
              onClick={() => setExpanded()}
            />
          </div>
        </div>
      </CSSTransition>
    </nav>
  )
}

export default memo(Navbar)
