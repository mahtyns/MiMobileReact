import React from 'react'
import './styles/buttonsStyling.css'

const Button = ({ content, addItemToCart }) => {
  return (
    <button 
        className='buttonStyles'
      onClick={() => addItemToCart()}>
        {content}
    </button> 
  )
}

export default Button