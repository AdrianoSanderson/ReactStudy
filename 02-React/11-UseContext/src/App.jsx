import React from 'react'
import UserContext from './contexts/UserContext'
import UserInfo from './components/UserInfo'
import ProductContext from './contexts/ProductContext'
import Products from './components/Products'


function App() {

  const user = {
    name: 'Luis',
    email: 'uYFQr@example.com'
  }

  const product = {
    name: 'Notebook',
    price: 2000
  }
  return (
    <>
      <UserContext.Provider value={user}>
        <UserInfo/>
      </UserContext.Provider>

      <ProductContext.Provider value={product}>
        <Products/>
      </ProductContext.Provider>
    </>
  )
}

export default App