import React from 'react'

const ModifyingModesEnum = () => {
  return (
    <>
      <p>
        Navigate to root of the project (not app dir) and find folder <span className="text-teal-400">'types'</span>
      </p>
      <p>
        Go to <span className="text-emerald-400">export.ts</span> and modify enum <span className="text-green-400">"Modes"</span>:
      </p>
      <p>Add field, that will be key (will be used in routing), and appropriate title</p>
      <p>(example: devide = 'Division')</p>
    </>
  )
}

export default ModifyingModesEnum
