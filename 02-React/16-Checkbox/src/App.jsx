import React, { useState } from 'react'

function App() {
  const [termos, setTermos] = useState(false)

  return (
    <>
    <form>
      <label>
        <input 
          type="checkbox" 
          value="termos" 
          checked={termos}
          onChange={(event) => setTermos(event.target.checked)}
        />
        Aceito os termos.
      </label>
    </form>
    <h1>{termos ? 'Sim' : 'Não'}</h1>
    </>
  )
}

export default App