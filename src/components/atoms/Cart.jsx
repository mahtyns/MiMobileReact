import React from 'react'
import img from  '../../resources/cart.png';
import './styles/imageStyling.css'

const Cart = () => {
  return (
    <img className='cartIcon' src={img} alt='Cart'/>
  )
}

export default Cart