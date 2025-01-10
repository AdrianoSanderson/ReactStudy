import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Produto() {
  const [produto, setProduto] = useState(null)
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    async function fetchProduto() {
      try{
        setCarregando(true)
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        const json = await response.json()
        setProduto(json)
      } catch (error) {
        setErro('Erro ao carregar o produto')
      } finally {
        setCarregando(false)
      }
    }
    fetchProduto()
  },[id])

  
  if (carregando) return <p>Carregando...</p>
  if (erro) return <p>{erro}</p>
  if (produto === null) return null
  return (
    <div>
      <h1>{produto.nome}</h1>
      <img src={produto.fotos[0].src} width="400" alt="" /><br />
      <span>Preço: R$ {produto.preco}</span>
    </div>
  )
}

export default Produto