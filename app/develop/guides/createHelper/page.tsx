import GuideWrapper from '@/app/develop/guides/components/GuideWrapper'
import RepoPullingGuideAndNavigatingToEquations from '@/app/develop/guides/components/Snippets/RepoPullingGuideAndNavigatingToEquations'
import CreateYourOwnTemplate from '@/app/develop/guides/components/CreateYourOwnTemplate'
import GuideContentWrapper from '@/app/develop/guides/components/GuideContentWrapper'

const Page = () => {
  return (
    <GuideWrapper>
      <CreateYourOwnTemplate>EquationHelper</CreateYourOwnTemplate>
      <GuideContentWrapper>
        <>
          <RepoPullingGuideAndNavigatingToEquations />
          <p>... Guide is uncompleted :(</p>
        </>
      </GuideContentWrapper>
    </GuideWrapper>
  )
}

export default Page
