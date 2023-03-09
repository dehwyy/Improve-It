import Path from '@/app/develop/guides/components/TextCustomization/path'
import Function from '@/app/develop/guides/components/TextCustomization/fn'
import File from '@/app/develop/guides/components/TextCustomization/file'
import Variable from '@/app/develop/guides/components/TextCustomization/variable'

const ModifyingEquationModule = () => {
  return (
    <>
      <p>
        Go back to <Path>app/utils/tools/equations</Path> and go to file <File>EquationModule.ts</File>
      </p>
      <p>
        Create new variable, that will be function that return new <span className="underline decoration-2">EquationKind</span> with injected deps
      </p>
      <p>
        Modify <Function>"getEquationKindFromMode"</Function> function by adding new conditional:
      </p>
      `else if (mode === "key of new field of modified enum") {'{'}
      <br />
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp; return <Variable>"variable that you just created"</Variable>
      </p>
      {'}'}` &nbsp;I guess ts autocomplete will help you
    </>
  )
}

export default ModifyingEquationModule
