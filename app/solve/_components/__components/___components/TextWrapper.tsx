interface IProps {
  name: string
  description: string
}
const TextWrapper = ({ name, description }: IProps) => {
  return (
    <div className="text-2xl text-white w-full">
      <p className="text-4xl text-center font-bold tracking-widest px-3">{name}</p>
      <p className="h-[3px] w-1/3 rounded-2xl mx-auto bg-gray-300 mt-3" />
      <p className="opacity-70 text-center mt-3 border-white">{description}</p>
    </div>
  )
}

export default TextWrapper
