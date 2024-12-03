import React from 'react'

function Produtos() {

    const produtos = [
        {
            nome: 'Notebook',
            propriedades: ['16gb ram', '512gb']
        },
        {
            nome: 'Smartphone',
            propriedades: ['2gb ram', '128gb']
        }
    ]

  return (
    <>
      <h1>Produtos</h1>

      {produtos.map((produto) => (
        <div style={{border: '1px solid white', margin: '10px'}} key={produto.nome}>
                <p>{produto.nome}</p>
            <ul>
                {produto.propriedades.map((propriedade) => (
                    <li key={propriedade}>{propriedade}</li>
                ))}
            </ul>
        </div>
      ))}
    </>
  )
}

export default Produtos