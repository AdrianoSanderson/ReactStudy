import Title from "./components/Title"

export default function App(){

  const name = "Fernanda"

  return (
    <div>
      <img src="/react.png" alt="React" />

      <Title/>

      <h1>React</h1>
      <p>A biblioteca  para intefaces de usuário web e nativas.</p>
      <button>Aprenda React</button>
      <button>Referência da API</button><hr />
      <h2>Crie interfaces de usuário de componentes</h2>
      <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p>
      <hr />
      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JacaScript popularizada pelo React.</p>
      <hr />
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Crianção de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>

      <h1>{ name }</h1>
    </div>
    
  )
}