import React, { useEffect, useState } from 'react'
import Card from '../Card'

const Products = () => {
    const [products, setProducts] = useState([])
    async function getProducts() {
        const data = await fetch("http://localhost:5000/moduls")
        const res = await data.json()
        console.log(res);
        setProducts(res)
    }
    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <section id='Products'>
                <div className="ProductsArea">
                    <div className="CardBox">
                        {products && products.map((item) => (
                            <Card key={item._id} id={item._id} text={item.text} title={item.title} products={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products