import React, { useState } from 'react'
import Input from './Form/Input'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <form>
      <Input label="Nome" id="name" value={name} setValue={setName} required
      />
      <Input label="Email" id="email" value={email} setValue={setEmail}/>
      <button>Enviar</button>
    </form>
  )
}

export default App