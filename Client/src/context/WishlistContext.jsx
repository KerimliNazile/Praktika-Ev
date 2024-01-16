import React, { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const WishlistContext = createContext()
const WishlistProvider = ({ children }) => {
    const [wish, setWish] = useLocalStorage("wishlist")

    //add
    function addWish(products) {
        const existWish = wish.findIndex(x => x._id === products._id)

        if (existWish === -1) {
            setWish([...wish, { ...products }])
        }

    }
    //Delete 
    function deleteWish(products) {
        const deletedwish = wish.filter(x => x._id !== products._id)
        setWish(deletedwish)
    }
    const data = {
        wish, setWish, addWish, deleteWish
    }
    return (
        <>
            <WishlistContext.Provider value={data}>
                {children}
            </WishlistContext.Provider>
        </>
    )
}

export default WishlistProvider