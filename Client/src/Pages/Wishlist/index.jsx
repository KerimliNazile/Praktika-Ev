import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../../context/WishlistContext'

const Wishlist = () => {
    const { wish, deleteWish } = useContext(WishlistContext)
    return (
        <>
            <Helmet>
                <title>Wishlist</title>
            </Helmet>
            <h1>Wishlist</h1>
            <div className="Wish">
                 {wish && wish.map(x =>
                <ul>
                    <li>{x.text}</li>
                    <li>{x.title}</li>
                    <li><button onClick={()=>deleteWish(x)}>Delete</button></li>
                </ul>
            )}
            </div>
           
        </>
    )
}

export default Wishlist