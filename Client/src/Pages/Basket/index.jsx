import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
    const { basket, deleteBasket, increaseBasket, decreaseBasket } = useContext(BasketContext)
    return (
        <div>
            <Helmet>
                <title>Basket</title>
            </Helmet>
            <h1>Basket</h1>
            <div className="BasketArea">
                {basket && basket.map(x =>
                    <ul>
                        <li>{x.text}</li>
                        <li>{x.title}</li>
                        <li><button onClick={() => deleteBasket(x)}>delete</button></li>
                        <li><button onClick={() => increaseBasket(x)}>+</button></li>
                        <p>{x.count}</p>
                        <li><button onClick={() => decreaseBasket(x)}>-</button></li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Basket