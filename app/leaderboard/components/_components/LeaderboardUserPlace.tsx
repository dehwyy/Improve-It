import { Skeleton } from '@mui/material'

const LeaderboardUserPlace = ({ place }: { place?: number }) => {
  return place ? <>{`${place}.`}</> : <Skeleton variant="text" className="text-6xl mr-[0.70rem]" />
}

export default LeaderboardUserPlace
