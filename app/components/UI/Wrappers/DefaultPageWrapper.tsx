interface IProps {
  children: React.ReactNode
}
const DefaultPageWrapper: React.FC<IProps> = ({ children }) => {
  return <div className="flex flex-col">{children}</div>
}

export default DefaultPageWrapper
