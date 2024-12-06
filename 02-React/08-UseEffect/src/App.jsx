import React, { useEffect, useState } from 'react'

function App() {
  const [dados, setDados] = useState(null)

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then(response => response.json())
    .then(json => setDados(json))
  }, [])

  return (
    <div>
      {dados && <p>{dados.nome}</p>}
    </div>
  )
}

export default App