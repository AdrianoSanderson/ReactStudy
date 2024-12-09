import React, { useEffect, useState } from 'react'
import GlobalContext from './contexts/GlobalContext'
import Products from './components/Products'
import Button from './components/Button'

function App() {
  const [dataProducts, setDataProducts] = useState(null)

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/').then(res => res.json()).then(json => setDataProducts(json))
  }, [])

  function limparDados(){
    setDataProducts(null)
  }
  return (
    <GlobalContext.Provider value={{ dataProducts, limparDados }}>
      <Products/>
      <Button/>
    </GlobalContext.Provider>
  )
}

export default App