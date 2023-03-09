import Link from 'next/link'

const NavigatingToKindsExample = () => {
  return (
    <>
      <p>
        Navigate to <span className="text-rose-400">kinds/example.ts</span> (if you want to create custom Helper check out this{' '}
        <Link className="text-sky-400" href="/develop/guides/createHelper">
          guide
        </Link>
        )
      </p>
      <p>
        After this just follow the steps written in <span className="text-emerald-400">example.ts</span>
      </p>
    </>
  )
}

export default NavigatingToKindsExample
