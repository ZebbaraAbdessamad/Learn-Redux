import React from 'react'
import {useSelector} from 'react-redux';
import './style.css'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Navbar = () => {
  const {amount} = useSelector((state)=>state.cart);
    

  return (
    <div className='nav-center'>
        <div className='store-name'>
            <h2>QuickShop</h2>
            </div>
            <div className='cart-container'>
            <p className='total-amount'>{amount}</p>
            <AiOutlineShoppingCart className='shopping-cart-icon' />
        </div>
    </div>
  )
}

export default Navbar
