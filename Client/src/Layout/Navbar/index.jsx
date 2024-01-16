import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
<div className="MainNav">
    <ul>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/add"}>Add Page</NavLink></li>
        <li><NavLink to={"/wishlist"}><FaHeart /></NavLink></li>
        <li><NavLink to={"/basket"}><FaBasketShopping /></NavLink></li>
    </ul>
</div>
    </>
  )
}

export default Navbar