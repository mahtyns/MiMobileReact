import React from 'react'
import './styles/textStyling.css'
import classNames from 'classnames'

const ProductPrice = ({productPrice, variant}) => {

  const productPriceTypes = classNames('priceTextStyles', {
    'gallery': variant === 'gallery'
  })

  return (
    <div className={productPriceTypes}>{productPrice} €</div>
  )
}

export default ProductPrice