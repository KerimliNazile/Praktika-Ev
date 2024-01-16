import React, { useContext } from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../context/WishlistContext';
import { BasketContext } from '../../context/BasketContext';
const Card = ({ text, title, id, products }) => {
    const { addWish } = useContext(WishlistContext)
    const { addBasket } = useContext(BasketContext)
    return (
        <>
            <div className="CardArea">
                <div className="CardBox">
                    <div className="CardText">
                        <h1>{text}</h1>
                        <h2>{title}</h2>
                    </div>
                    <div className="CardIcon">
                        <div onClick={()=>addBasket(products)}><FaBasketShopping /></div>
                        <div onClick={() => addWish(products)} ><FaHeart /></div>
                        <div><Link to={`/${id}`}><FaEye /></Link></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card