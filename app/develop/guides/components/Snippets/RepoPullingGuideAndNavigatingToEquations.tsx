import File from '@/app/develop/guides/components/TextCustomization/file'
import Path from '@/app/develop/guides/components/TextCustomization/path'
import Folder from '@/app/develop/guides/components/TextCustomization/folder'

const RepoPullingGuideAndNavigatingToEquations = () => {
  return (
    <>
      <p>
        First of all you should pull repo from{' '}
        <a className="text-sky-400" href="https://github.com/dehwyy/Solve-it/tree/dev">
          github
        </a>
        , dev branch.
      </p>
      <p className="opacity-60">
        * I should notice you that authorization wouldn&apos;t work cuz I wouldn&apos;t have any <File>.env</File> variables.
      </p>
      <p>
        Navigate to <Path>app/utils/equations</Path>
      </p>
      <p>
        You will see 2 dirs: <Folder>&apos;helpers&apos;</Folder> and <Folder>&apos;kinds&apos;</Folder>
      </p>
    </>
  )
}

export default RepoPullingGuideAndNavigatingToEquations
