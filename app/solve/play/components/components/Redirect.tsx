import Link from 'next/link'
import StyledWrapper from '@/app/components/UI/Wrappers/StyleWrapper'

const Redirect = () => {
  return (
    <StyledWrapper className="shadow-red-500/100 mt-10 text-red-500 font-extrabold border-current">
      <div>
        <p className="text-5xl text-red-500 text-center">This page is unresolved</p>
        <article className="text-white pt-5 text-left">
          <p className="text-2xl opacity-70 text-justify">
            It can be happened due to either <span>unimplemented equation</span> or <span>undefined equations settings</span>
          </p>
          <ul style={{ listStyle: 'inside' }} className="pt-5 text-2xl opacity-70">
            <li>
              <Link href="/issues/unimplemented_equations" className="text-sky-500 cursor-pointer">
                List of unimplemented equation
              </Link>
            </li>
            <li>
              <Link href="/solve" className="text-sky-500 cursor-pointer">
                Go to mode settings
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </StyledWrapper>
  )
}

export default Redirect
