import { Skeleton } from '@mui/material'

const SkeletonTemplate = () => {
  return (
    <div className="mt-8" data-testid="guide_block">
      <Skeleton variant="text" className="text-6xl sm:text-5xl text-center pb-5 font-extrabold sm:leading-[1.2]" />
    </div>
  )
}

export default SkeletonTemplate
