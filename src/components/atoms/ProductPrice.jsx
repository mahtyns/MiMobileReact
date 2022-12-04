import React from 'react'
import './styles/textStyling.css'

const ProductPrice = ({productPrice}) => {
  return (
    <div className='priceTextStyles'>{productPrice}€</div>
  )
}

export default ProductPrice