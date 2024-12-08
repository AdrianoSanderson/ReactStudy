import React, { useMemo, useState } from 'react'

function App() {
  const [cont, setCont] = useState(0)

  window.localStorage.setItem('produto', 'Smartphone')

  const dados = useMemo(() => {
    const localItem = window.localStorage.getItem('produto')
    console.log('Aconteceu o Memo')
    return localItem
  }, [])
  console.log(dados)
  return (
    <div>
      <button onClick={() => setCont(cont + 1)}>{cont}</button>
    </div>
  )
}

export default App