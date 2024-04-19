import { useState } from "react"

export default function App(){
  const [cont, setCont] = useState(0)

  function acrescent(){
    setCont((currentState) => currentState + 1)
  }

  return (
    <>
      <h3>{cont}</h3>
      <button onClick={acrescent}>Acrescentar</button>
    </>
  )
}