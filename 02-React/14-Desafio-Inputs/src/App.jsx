import React, { useState } from 'react'

function App() {
  const [resultFetch, setResultFetch] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      senha: event.target.senha.value,
      cep: event.target.cep.value,
      rua: event.target.rua.value
    }
    try {
      fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      setResultFetch(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          name="senha"
          id="senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          name="cep"
          id="cep"
          value={cep}
          onChange={(event) => setCep(event.target.value)}
        />
        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          name="rua"
          id="rua"
          value={rua}
          onChange={(event) => setRua(event.target.value)}
        />
        <button>Enviar</button>
      </form>
      {resultFetch && (
        <p>Cadastro realizado com sucesso</p>
      )}
    </>
  )
}

export default App