//Carrito de productos - imagen y el número de productos

import React from 'react'
import ProductNumber from '../atoms/ProductNumber'
import Cart from '../atoms/Cart'
import './styles/moleculeStyles.css'

const ShoppingCart = ({cartItemsNumber}) => {
  return (
    <div className='shoppingCartContainer'>
      <ProductNumber cartItemsNumber={cartItemsNumber} />
      <Cart />
    </div>
  )
}

export default ShoppingCart