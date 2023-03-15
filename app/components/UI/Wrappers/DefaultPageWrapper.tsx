interface IProps {
  children: React.ReactNode
}
const DefaultPageWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <div className="mx-auto min-w-[450px] md:w-full w-[900px] flex flex-col mt-5 p-12 premd:bg-transparent premd:border-0 premd:shadow-none bg-[#444444] block-neo-style pb-10">
      {children}
    </div>
  )
}

export default DefaultPageWrapper
