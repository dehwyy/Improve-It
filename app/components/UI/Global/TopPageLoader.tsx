import NextTopLoader from 'nextjs-toploader'
import { Suspense } from 'react'

const TopPageLoader = () => {
  return (
    <Suspense fallback={<></>}>
      <NextTopLoader showSpinner={false} color="rgb(239,68,68)" />
    </Suspense>
  )
}

export default TopPageLoader
