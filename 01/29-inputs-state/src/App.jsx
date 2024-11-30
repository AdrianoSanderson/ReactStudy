import { useState } from "react"
import Input from "./components/input"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar senha!")
  const [passwordSize, setPasswordsize] = useState(8)
  const [showInput, setShowInput] = useState(false)

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
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input 
          type="checkbox" 
          id="" 
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
          />
      </div>

    {showInput ? (
      <div>
        <label htmlFor="passwordSize">Tamanho</label>
        <Input passwordSize={passwordSize} setPasswordsize={setPasswordsize} />
      </div>
    ) : null}


      <button onClick={generate}>Gerar {showInput ? passwordSize : 12} caracteres!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
