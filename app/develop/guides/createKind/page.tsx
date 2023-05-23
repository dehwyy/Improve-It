import GuideWrapper from '@/app/develop/guides/components/GuideWrapper'
import RepoPullingGuideAndNavigatingToEquations from '@/app/develop/guides/components/Snippets/RepoPullingGuideAndNavigatingToEquations'
import ModifyingModesEnum from '@/app/develop/guides/createKind/components/ModifyingModesEnum'
import ModifyingEquationModule from '@/app/develop/guides/createKind/components/ModifyingEquationModule'
import NavigatingToKindsExample from '@/app/develop/guides/createKind/components/NavigatingToKindsExample'
import CreateYourOwnTemplate from '@/app/develop/guides/components/CreateYourOwnTemplate'
import GuideContentWrapper from '@/app/develop/guides/components/GuideContentWrapper'
import TopPageLoader from '@/app/components/UI/Global/TopPageLoader'

const Page = () => {
  return (
    <>
      <TopPageLoader />
      <GuideWrapper>
        <CreateYourOwnTemplate>EquationKind</CreateYourOwnTemplate>
        <GuideContentWrapper>
          <>
            <RepoPullingGuideAndNavigatingToEquations />
            <NavigatingToKindsExample />
            <hr />
            <ModifyingModesEnum />
            <hr />
            <ModifyingEquationModule />
            <hr />
            <p>Congratulations! You created custom equation! I guess I should add images...</p>
          </>
        </GuideContentWrapper>
      </GuideWrapper>
    </>
  )
}

export default Page
