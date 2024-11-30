
function App() {

  const fernanda = {
    cliente: "Fernanda",
    idade: 23,
    compras: [
      { nome: "Notebook", preco: 2500 },
      { nome: "Smartphone", preco: 1500 },
      { nome: "Tablet", preco: 1200 },
    ],
    ativa: true
  }
  const adriano = {
    cliente: "Adriano",
    idade: 27,
    compras: [
      { nome: "Carro", preco: 25 },
      { nome: "Smartphone", preco: 15 },
      { nome: "Tablet", preco: 12 },
    ],
    ativa: false
  }

  const cliente = fernanda

  const total = cliente.compras.map((item => item.preco)).reduce((total, preco) => total + preco, 0)

  return (
    <>
      <p>Nome: {cliente.cliente}</p>
      <p>Idade: {cliente.idade}</p>

      <p>Situação: <span style={{ color: cliente.ativa ? "green" : "red" }}>{cliente.ativa ? "Ativo" : "Inativo"}</span></p>

      

      <p>Total gasto: {total}</p>

      {total > 1000 && <p>Você gastou muito</p>}

    </>
  )
}

export default App
