const SessionHeading = ({ totalSession }: { totalSession: number }) => {
  return (
    <div className="w-2/3 sm:w-full mx-auto text-center">
      <h2 className="text-gray-200 text-3xl">
        Recent Sessions (4 days) - <span className="bg-[#222222] rounded-full py-1 px-3 text-2xl">{totalSession}</span>
      </h2>
      <div className="mt-5 w-full h-[5px] bg-gradient-to-r from-purple-500 to-red-600 rounded-xl"></div>
    </div>
  )
}

export default SessionHeading
