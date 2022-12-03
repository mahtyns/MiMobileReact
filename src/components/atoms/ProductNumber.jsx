import React from 'react';
import './styles/textStyling.css'

export const ProductNumber = ({ cartItemsNumber }) => {
  return (
    <div className='cartTotalItems'>{cartItemsNumber}</div>
  )
}

export default ProductNumber