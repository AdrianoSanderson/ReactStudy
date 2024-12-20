import React from 'react'
import Header from './Header'
import Home from './Home'
import Produtos from './Produtos'

function App() {

  const { pathname } = window.location

  let Component

  if (pathname === '/produtos') {
    Component = Produtos
  } else {
    Component = Home
  }

  return (
    <>
      <Header />
      <Component />
    </>
  )
}

export default App