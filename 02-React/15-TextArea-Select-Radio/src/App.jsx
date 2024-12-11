import React, { useState } from 'react'

function App() {
  const [text, setText] = useState("")
  const [select, setSelect] = useState("")
  const [radio, setRadio] = useState("")

  function handleChange(event) {
    setRadio(event.target.value)
  }
  return (
    <form>
      <textarea 
        name="text" 
        id="text" 
        value={text} 
        onChange={(event) => {setText(event.target.value)}}
        rows={2}
      />
      <br />
      {text}

      <select value={select} id="select" onChange={(event) => {setSelect(event.target.value)}}>
        <option disabledvalue="">Selecione</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select><br />
      {select}

      <label>
        <input type="radio" onChange={handleChange} name='produto' value={"Smartphone"} />
        Smartphone
      </label>
      <label>
        <input type="radio" onChange={handleChange} name='produto' value={"Notebook"} />
        Notebook
      </label><br />
      {radio}
    </form>
  )
}

export default App