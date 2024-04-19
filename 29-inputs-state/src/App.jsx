import { useState } from "react"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar senha!")
  const [passwordSize, setPasswordsize] = useState(8)

  function generate(){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let index = 0; index < passwordSize; index++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]      
    }
    setPassword(newPassword)
    setCopyText("Copiar senha!")
  }

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password)
    setCopyText("Senha copiada!")
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>

      <div>
        <label htmlFor="passwordSize">Tamanho</label>
        <input 
          type="number" 
          id="passwordSize" 
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordsize(ev.target.value)}
          />
      </div>

      <button onClick={generate}>Gerar {passwordSize} caracteres!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
