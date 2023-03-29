import Link from 'next/link'

interface IProps {
  hasInput: string | boolean
  hasUsers: string | boolean
  setFocus: () => void
}
const LeaderboardNoMatching = ({ setFocus, hasInput, hasUsers }: IProps) => {
  return (
    <div className="text-4xl text-center mt-20 font-bold">
      Nothing was found!{' '}
      {hasInput && hasUsers ? (
        <span onClick={setFocus} className="text-fuchsia-500 cursor-pointer">
          Try to change input.
        </span>
      ) : !hasUsers ? (
        <Link href="/solve" className="text-blue-500">
          Become First!
        </Link>
      ) : (
        <></>
      )}
    </div>
  )
}

export default LeaderboardNoMatching
