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
      <p className="text-white opacity-60">
        * I should notice you that authorization wouldn't work cuz I wouldn't have any <span className="text-emerald-400">.env</span> variables.
      </p>
      <p>
        Navigate to <span className="text-rose-400">app/utils/equations</span>
      </p>
      <p>
        You will see 2 dirs: <span className="text-teal-400">'helpers'</span> and <span className="text-teal-400">'kinds'</span>
      </p>
    </>
  )
}

export default RepoPullingGuideAndNavigatingToEquations
