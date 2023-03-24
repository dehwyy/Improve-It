'use client'
import { CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <div className="flex justify-center items-center pt-36">
      <CircularProgress color="info" style={{ height: '50px', width: '50px' }} />
    </div>
  )
}

export default Loader
