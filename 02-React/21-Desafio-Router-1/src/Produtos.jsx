import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Produtos() {
    const [produtos, setProdutos] = React.useState([null])

    useEffect(() => {
        async function fetchProdutos() {
            const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
            const json = await response.json()
            setProdutos(json)
        }
        fetchProdutos()
    }, [])
    console.log(produtos)

    if (produtos[0] === null) return null
    return (
        <div>
            {produtos.map(produto => (
                <Link to={`produto/${produto.id}`} key={produto.id}>
                    <img src={produto.fotos[0].src} alt="" />
                    <h2>{produto.nome}</h2>
                </Link>
            ))}
        </div>
    )
}

export default Produtos