const IndexButton = ({ className, children, testid }: { children: React.ReactNode; testid: string; className: string }) => {
  return (
    <div
      data-testid={testid}
      className={`${className} mt-10 font-extrabold border-current shadow-lg hover:shadow-red-500/100 hover:text-red-500 cursor-pointer w-full flex flex-col items-center p-5 select-none transition-all bg-[#333333] border-2`}>
      {children}
    </div>
  )
}

export default IndexButton
