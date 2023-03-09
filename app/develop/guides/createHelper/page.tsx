import GuideWrapper from '@/app/develop/guides/components/GuideWrapper'
import RepoPullingGuideAndNavigatingToEquations from '@/app/develop/guides/components/Snippets/RepoPullingGuideAndNavigatingToEquations'
import CreateYourOwnTemplate from '@/app/develop/guides/components/CreateYourOwnTemplate'
import GuideContentWrapper from '@/app/develop/guides/components/GuideContentWrapper'
import Link from 'next/link'
import Path from '@/app/develop/guides/components/TextCustomization/path'
import File from '@/app/develop/guides/components/TextCustomization/file'

const Page = () => {
  return (
    <GuideWrapper>
      <CreateYourOwnTemplate>EquationHelper</CreateYourOwnTemplate>
      <GuideContentWrapper>
        <>
          <RepoPullingGuideAndNavigatingToEquations />
          <p>
            Navigate to <Path>helpers/example.ts</Path> (if you want to create custom Kind check out this{' '}
            <Link className="text-sky-400" href="/develop/guides/createKind">
              guide
            </Link>
            )
          </p>
          <p>
            After this just follow the steps written in <File>example.ts</File>
          </p>
          <hr />
          <p>Congratulations! You created custom helper! I guess I should add images...</p>
        </>
      </GuideContentWrapper>
    </GuideWrapper>
  )
}

export default Page
