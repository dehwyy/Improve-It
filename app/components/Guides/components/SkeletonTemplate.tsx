import { Skeleton } from '@mui/material'

const SkeletonTemplate = () => {
  return (
    <div>
      <Skeleton variant="text" sx={{ fontSize: '3.75rem' }} />
      <Skeleton variant="rectangular" height={160} />
      <br />
      <Skeleton variant="rectangular" height={160} />
      <br />
      <Skeleton variant="rectangular" height={160} />
    </div>
  )
}

export default SkeletonTemplate
