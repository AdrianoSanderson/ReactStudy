import { useRef, useState } from "react"
import RefExample from "./RefExample"

function App() {
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `)
  }
  return (
    <div>
      <h1>Exemplo useRef</h1>
      <RefExample />
      <hr />
      <h1>Conhecendo o UseRef </h1>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <hr />
      <button onClick={() => variable++}>Add Variável</button>
      <button onClick={() => ref.current++}>Add Ref</button>
      <button onClick={() => setState(state => state + 1)}>Add State</button>
      <hr />

      <button onClick={showValues}>Exibir Valores</button>
    </div>
  )
}

export default App
