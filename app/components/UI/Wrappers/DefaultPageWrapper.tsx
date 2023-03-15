interface IProps {
  children: React.ReactNode
}
const DefaultPageWrapper: React.FC<IProps> = ({ children }) => {
  return <div className="usm:min-w-[400px] mx-auto md:w-full w-[900px] flex flex-col mt-5 p-12 bg-[#555555] block-neo-style pb-10">{children}</div>
}

export default DefaultPageWrapper
