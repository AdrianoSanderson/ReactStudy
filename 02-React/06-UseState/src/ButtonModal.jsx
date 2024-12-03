import React from 'react'

function ButtonModal({ setModal}) {
  return (
    <button onClick={() => setModal(true)}>
        abrir
    </button>
  )
}

export default ButtonModal