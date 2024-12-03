import React, { useState } from 'react'
import ButtonModal from './ButtonModal'
import Modal from './assets/Modal'

function App() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <ButtonModal setModal={setModal}/>
      <Modal modal={modal} setModal={setModal}/>
    </>
  )
}

export default App