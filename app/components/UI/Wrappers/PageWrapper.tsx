interface IProps {
  children: React.ReactNode
  classes?: string
}

const PageWrapper = ({ children, classes }: IProps) => {
  return <div className={`${classes} flex-col flex`}>{children}</div>
}

export default PageWrapper
