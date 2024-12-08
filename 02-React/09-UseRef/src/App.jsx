import React, { useRef, useState } from 'react'

function App() {
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  function showValues() {
    alert(`
      variável: ${variable} 
      state: ${state}
      ref: ${ref.current}`)
  }

  return (
    <div>
      <h2>Conhecendo o UseRef</h2>
      <p>Variável: {variable}</p>
      <p>State: {state}</p>
      <p>Ref: {ref.current}</p>

      <button onClick={() => variable++}>Aumentar Variável</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
      <button onClick={() => ref.current++}>Aumetar ref</button>

      <button onClick={showValues}>Click</button>
    </div>

  )
}

export default App