import React from 'react'
import './styles/textStyling.css'
import classNames from 'classnames'

const ProductName = ({variant, productName}) => {

  const productNameTypes = classNames('productNameStyles', {
    'gallery': variant === 'gallery'
  })

  return (
      <div className={productNameTypes}>{productName}</div>
  )
}

export default ProductName