interface IProps {
  children: React.ReactNode
}
const AlphaWrapper: React.FC<IProps> = ({ children }) => {
  return <div className="flex-row-reverse w-full  px-10 p-3 usm:px-5 flex vsm:justify-center justify-start">{children}</div>
}

export default AlphaWrapper
