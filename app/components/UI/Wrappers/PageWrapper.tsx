'use client'
import { motion } from 'framer-motion'
interface IProps {
  children: React.ReactNode
  classes?: string
}

const PageWrapper = ({ children, classes }: IProps) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimation"
      transition={{ ease: 'easeOut', duration: 0.7 }}
      variants={{
        pageInitial: { opacity: 0, translateY: '5px' },
        pageAnimation: { opacity: 1, translateY: '0px' },
      }}>
      <div className={`${classes} flex-col flex`}>{children}</div>
    </motion.div>
  )
}

export default PageWrapper
