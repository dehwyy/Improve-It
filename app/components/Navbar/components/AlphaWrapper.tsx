interface IProps {
  children: React.ReactNode
}
const AlphaWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex-row-reverse bg-gradient-to-b from-violet-700 to-violet-500 w-full min-w-[300px] px-10 p-3 usm:px-5 flex vsm:justify-center justify-start">
      {children}
    </div>
  )
}

export default AlphaWrapper
