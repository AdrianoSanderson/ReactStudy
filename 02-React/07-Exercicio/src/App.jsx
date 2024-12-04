import React, { useState } from 'react'
import Produto from './Produto'

function App() {
  const [dados, setDados] = useState(null)
  const [loading, setLoading] = useState(null)

  async function handleClick(event) {
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,);

    const json = await response.json()

    console.log(json)

    setDados(json)
    setLoading(false)
  }

  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      {loading ? <p>Carregando...</p> : null}
      {!loading && dados && <Produto dados={dados}/>}
    </div>
  )
}

export default App