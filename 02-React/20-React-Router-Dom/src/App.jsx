import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Header from './Header'
import PaginaNaoEncontrada from './PaginaNaoEncontrada'
import Contato from './Contato'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='sobre' element={<Sobre/>}/>
        <Route path='contato' element={<Contato/>}/>
        <Route path='*' element={<PaginaNaoEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App