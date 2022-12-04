//Los "items" - contenedor general del grid de productos

import React from 'react'
import ProductItemListed from '../molecules/ProductItemListed'
import './styles/organismStyles.css'
import { Link } from "react-router-dom";

const ProductListGallery = ({productList}) => {
  return (
    <div className='productGridContainer'>
      {productList.map(product => 
      <Link to='/products'>
      <ProductItemListed productName={product.product_brand + ' ' + product.product_model} imageAlt={product.product_brand + ' ' + product.product_model} imageSrc={product.product_img}/>
      </Link>)
      }
    </div>
  )
}

export default ProductListGallery