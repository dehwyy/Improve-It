'use client'
import { FC } from 'react'
import { SessionProvider } from 'next-auth/react'
import createEmotionCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
interface IProps {
  children: React.ReactNode
}
const cache = createEmotionCache({
  key: 'sus',
})

const Providers: FC<IProps> = ({ children }) => {
  return (
    <CacheProvider value={cache}>
      <SessionProvider>{children}</SessionProvider>
    </CacheProvider>
  )
}

export default Providers
