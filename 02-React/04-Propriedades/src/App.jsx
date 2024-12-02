function Titulo({ color, texto }) {
  return (
    <h1 style={{ color: color}}>{texto}</h1>
  )
}

function Children({ children }) {
  return (
    <h1>{children}</h1>
  )
}

function App() {

  return (
    <>
      <h1>Hello</h1>

      <Titulo color="red" texto="World!" />
      <Titulo color="orange"texto="I am Sanderson" />

      <Children>
        Lembre-se do Children <br />
        <span style={{ color: "red"}}>Podemos passar tags para o children</span>
      </Children>
    </>
  )
}

export default App
