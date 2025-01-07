import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <button>
                    <Link to={'/'}>Produtos</Link>
                </button>
                <button>
                    <Link to={'contato'}>Contato</Link>
                </button>
            </nav>
        </div>
    )
}

export default Header