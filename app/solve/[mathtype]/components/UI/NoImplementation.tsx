import Link from 'next/link'

const NoImplementation = () => {
  return (
    <div className="text-center block-neo-style bg-[#666666] p-5 text-xl" style={{ wordSpacing: '7px' }}>
      <span className="text-2xl underline decoration-2">
        No implementation yet
        <br />
      </span>
      I would be UwU {`${'if'}`} you decide to help me with making hard equations or maybe something like derivative, integral calculation or
      trigonometry equations{' '}
      <Link href="/develop/guides/createKind" className="text-sky-400">
        Guide how to do this
      </Link>
    </div>
  )
}

export default NoImplementation
