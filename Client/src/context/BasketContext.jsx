import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
export const BasketContext = createContext()
const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useLocalStorage("basket")

    // add
    function addBasket(products) {
        const existBasket = basket.findIndex(x => x._id === products._id)
        if (existBasket === -1) {
            setBasket([...basket, { ...products, count: 1 }])
        } else {
            basket[existBasket].count++
        }
    }
    //delete
    function deleteBasket(products) {
        const deletedBasket = basket.filter(x = x._id !== products._id)
        setBasket(deletedBasket)
    }

    // increase 
    function increaseBasket(products) {
        const existBasket = basket.findIndex(x = x._id === products._id)
        if (existBasket !== -1) {
            basket[existBasket].count++
            setBasket([...basket])
        }
    }



    //decrease
    function decreaseBasket(products) {
        const existBasket = basket.findIndex(x = x._id === products._id)
        if (existBasket && existBasket.count > 1) {
            existBasket.count--
            setBasket([...basket])
            return
        }
        setBasket(basket.filter((x) => x = x._id !== products._id))
    }

    const data = {
        basket, setBasket, addBasket, deleteBasket, increaseBasket, decreaseBasket
    }
}
return (
    <>
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    </>
)


export default BasketProvider