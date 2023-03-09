import Link from 'next/link'
import Path from '@/app/develop/guides/components/TextCustomization/path'
import File from '@/app/develop/guides/components/TextCustomization/file'

const NavigatingToKindsExample = () => {
  return (
    <>
      <p>
        Navigate to <Path>kinds/example.ts</Path> (if you want to create custom Helper check out this{' '}
        <Link className="text-sky-400" href="/develop/guides/createHelper">
          guide
        </Link>
        )
      </p>
      <p>
        After this just follow the steps written in <File>example.ts</File>
      </p>
    </>
  )
}

export default NavigatingToKindsExample
