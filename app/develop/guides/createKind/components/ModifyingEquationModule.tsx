const ModifyingEquationModule = () => {
  return (
    <>
      <p>
        Go back to <span className="text-rose-400">app/utils/tools/equations</span> and go to file{' '}
        <span className="text-emerald-400">EquationModule.ts</span>
      </p>
      <p>
        Create new variable, that will be function that return new <span className="underline decoration-2">EquationKind</span> with injected deps
      </p>
      <p>
        Modify <span className="text-violet-400">"getEquationKindFromMode"</span> function by adding new conditional:
      </p>
      `else if (mode === "key of new field of modified enum") {'{'}
      <br />
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp; return <span className="text-red-500">"variable that you just created"</span>
      </p>
      {'}'}` &nbsp;I guess ts autocomplete will help you
    </>
  )
}

export default ModifyingEquationModule
