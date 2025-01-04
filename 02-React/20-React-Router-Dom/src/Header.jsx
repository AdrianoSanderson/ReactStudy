import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1>Header</h1>
        <nav>
            <Link to='/'>Home</Link><br />
            <Link to='sobre'>Sobre</Link><br />
            <Link to='contato'>Contato</Link>
        </nav>
    </div>
  )
}

export default Header