import React, { useState } from 'react'
import Input from './Form/Input'
import Select from './Form/Select'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] = useState('')

  return (
    <form>
      <Select options={['Notebook', 'Smartphone']} value={produto} setValue={setProduto}/>
      {produto}

      <Input label="Nome" id="name" value={name} setValue={setName} required
      />
      <Input label="Email" id="email" value={email} setValue={setEmail}/>
      <button>Enviar</button>
    </form>
  )
}

export default App