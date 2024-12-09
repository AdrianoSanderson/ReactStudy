import React, { useContext } from 'react'
import GlobalContext from '../contexts/GlobalContext'

function LimparDados() {
    const { limparDados } = useContext(GlobalContext)

  return (
    <button onClick={limparDados}>Limpar</button>
  )
}

export default LimparDados