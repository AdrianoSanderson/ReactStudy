import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }
   return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input 
        type="text" 
        id="nome"
        name="email"
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

      <button>Enviar</button>
    </form>
    <h1>{name}</h1>
    </>
  )
}

export default App