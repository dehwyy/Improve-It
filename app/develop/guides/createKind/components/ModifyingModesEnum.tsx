import File from '@/app/develop/guides/components/TextCustomization/file'
import TypescriptThing from '@/app/develop/guides/components/TextCustomization/tsThing'
import Folder from '@/app/develop/guides/components/TextCustomization/folder'

const ModifyingModesEnum = () => {
  return (
    <>
      <p>
        Navigate to root of the project (not app dir) and find folder <Folder>&apos;types&apos;</Folder>
      </p>
      <p>
        Go to <File>export.ts</File> and modify enum <TypescriptThing>&apos;Modes&apos;</TypescriptThing>:
      </p>
      <p>Add field, that will be key (will be used in routing), and appropriate title</p>
      <p>(example: devide = &apos;Division&apos;)</p>
    </>
  )
}

export default ModifyingModesEnum
