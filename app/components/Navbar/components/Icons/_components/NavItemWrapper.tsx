import styled from '@emotion/styled'
import { Grow } from '@mui/material'

interface IProps {
  children: React.ReactElement<any, any>
  text: string
  isGrowable?: boolean
  idx?: number
}

const Wrapper = styled.div`
  @media (min-width: 639px) and (hover: hover) {
    & > div:first-child {
      margin-top: 50px;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease;
      white-space: nowrap;
    }
    &:hover > div:first-child {
      opacity: 1 !important;
      visibility: visible !important;
    }
  }
  @media (max-width: 639px) {
    & > a:last-child,
    & > div:last-child {
      padding: 1rem;
    }
    & svg {
      font-size: 3rem !important;
    }
  }
`

const NavItemWrapper: React.FC<IProps> = ({ children, text, isGrowable = true, idx = -1 }) => {
  return (
    <Wrapper className="relative">
      <div className="opacity-0 invisible pt-[15px] absolute font-extrabold right-1/2 translate-x-1/2 text-white">{text}</div>
      <Grow in={isGrowable} style={{ transformOrigin: '0 0 0' }} {...(isGrowable ? { timeout: (idx + 1) * 400 } : {})}>
        {children}
      </Grow>
    </Wrapper>
  )
}

export default NavItemWrapper
