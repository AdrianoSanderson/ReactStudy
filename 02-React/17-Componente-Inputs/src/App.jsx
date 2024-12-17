import React, { useState } from 'react'
import Input from './Form/Input'
import Select from './Form/Select'
import Radio from './Form/Radio'
import Checkbox from './Form/Checkbox'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [produto, setProduto] = useState('')
  const [cor, setCor] = useState('')
  const [linguagens, setLinguagens] = useState([])

  return (
    <form>
      <Checkbox options={["Javascript", "PHP", "Python"]} value={linguagens} setValue={setLinguagens}/>
      <br />
      {linguagens}

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