import React, { useState } from 'react'
import Input from './Form/Input'
import Select from './Form/Select'
import Radio from './Form/Radio'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] = useState('')
  const [cor, setCor] = useState('')

  return (
    <form>
      <Radio options={['Amarelo', 'Vermelho']} value={cor} setValue={setCor}/>
      <br />

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