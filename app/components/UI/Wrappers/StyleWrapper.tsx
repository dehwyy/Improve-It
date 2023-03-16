'use client'
import styled from '@emotion/styled'

interface IProps {
  children: React.ReactNode
  classes: string
}
const StyledWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  user-select: none;
  border-radius: 0.5rem;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  background-color: rgb(51, 51, 51);
  border-width: 2px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`

export default StyledWrapper
