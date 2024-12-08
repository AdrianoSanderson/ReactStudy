import React, { useContext } from 'react'
import ProductContext from '../contexts/ProductContext'

function Products() {

    const product = useContext(ProductContext)
  return (
    <div>
        <h2>Produto</h2>
        <p>Nome: {product.name}</p>
        <p>Preço: {product.price}</p>

    </div>
  )
}

export default Products