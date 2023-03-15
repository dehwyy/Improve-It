'use client'
import AlphaDefaultPageWrapper from '@/app/components/UI/Wrappers/_AlphaDefaultPageWrapper'

interface IProps {
  children: React.ReactNode
  classes: string
}
const _AlphaStyleWrapper: React.FC<IProps> = ({ children, classes }) => {
  return <AlphaDefaultPageWrapper className={classes}>{children}</AlphaDefaultPageWrapper>
}

export default _AlphaStyleWrapper
