import React from 'react'
import './styles/textStyling.css'

const ProductName = ({productName}) => {
  return (
      <div className='productNameStyles'>{productName}</div>
  )
}

export default ProductName