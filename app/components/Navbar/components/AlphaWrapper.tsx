interface IProps {
  children: React.ReactNode
}
const AlphaWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex-row-reverse bg-gradient-to-b from-violet-800 to-violet-600 w-full min-w-[300px] px-7 p-3 flex justify-start">{children}</div>
  )
}

export default AlphaWrapper
