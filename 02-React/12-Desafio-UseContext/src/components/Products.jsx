import React, { useContext } from 'react'
import GlobalContext from '../contexts/GlobalContext'

function Products() {
    const products = useContext(GlobalContext)

    if (products.dataProducts === null) {
        return null
    } else {
        return (
            <>
                <h3>Produtos:</h3>
                {products.dataProducts.map((item) =>{
                    return (
                        <p key={item.id}>{item.nome}</p>
                    )
                })}
            </>
        )
    }

}

export default Products