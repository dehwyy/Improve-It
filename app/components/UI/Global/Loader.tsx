'use client'
import { CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <div className="flex justify-center items-center pt-36">
      <CircularProgress color="secondary" style={{ height: '100px', width: '100px' }} />
    </div>
  )
}

export default Loader
