// Información sobre el producto y las acciones
import React from 'react'
import ProductDescription from '../molecules/ProductDescription'
import ProductActions from '../molecules/ProductActions'
import Button from '../atoms/Button'
import './styles/organismStyles.css'

export const ProductDetailInfo = ({ productDescription, productMemory, productColor, addItemToCart, chooseMemory, chooseColor }) => {
  return (
    <div className="productDetailInfoContainer">
      <ProductDescription productDescription={productDescription}/>
      <ProductActions productMemory={productMemory} productColor={productColor} chooseMemory={chooseMemory} chooseColor={chooseColor}/>
      <div className="buttonContainer">
        <Button content={'Add to cart'} addItemToCart={addItemToCart} productId={productDescription.product_id}/>
      </div>
    </div>
  )
}
