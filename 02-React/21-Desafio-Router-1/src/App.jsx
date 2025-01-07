import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Produtos from './Produtos'
import Contato from './Contato'
import Header from './Header'
import Produto from './Produto'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Produtos />} />
        <Route path='/produto/:id' element={<Produto />} />
        <Route path='contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App