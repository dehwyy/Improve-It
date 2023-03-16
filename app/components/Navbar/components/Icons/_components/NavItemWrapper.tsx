import styled from '@emotion/styled'

interface IProps {
  children: React.ReactNode
  text: string
}

const Wrapper = styled.div`
  & > div:last-child {
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease;
    white-space: nowrap;
  }
  &:hover > div:last-child {
    opacity: 1;
    visibility: visible;
  }
`

const NavItemWrapper: React.FC<IProps> = ({ children, text }) => {
  return (
    <Wrapper className="relative">
      {children}
      <div className="pt-[15px] absolute font-extrabold right-1/2 translate-x-1/2 text-white">{text}</div>
    </Wrapper>
  )
}

export default NavItemWrapper
