interface IProps {
  children: React.ReactNode
}
const DefaultPageWrapper: React.FC<IProps> = ({ children }) => {
  return <div className="mx-auto min-w-[400px] md:w-full w-[900px] flex flex-col mt-5 p-12 pb-10">{children}</div>
}

export default DefaultPageWrapper
