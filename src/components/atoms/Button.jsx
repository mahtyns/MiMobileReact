import React from 'react'
import './styles/buttonsStyling.css'

const Button = ({ content, addItemToCart, productId }) => {
  return (
    <button 
        className='buttonStyles'
        onClick={() => addItemToCart(productId)}>
        {content}
    </button> 
  )
}

export default Button