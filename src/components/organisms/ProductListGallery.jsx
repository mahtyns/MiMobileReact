//Los "items" - contenedor general del grid de productos

import React from 'react'
import ProductItemListed from '../molecules/ProductItemListed'
import './styles/organismStyles.css'
import { Link } from "react-router-dom";

const ProductListGallery = ({productList}) => {

  return (
    <div className='productGridContainer'>
      {productList.map(product => 
      <Link to={`/${product.product_id}`}>
      <ProductItemListed key={product.product_id} productName={product.product_brand + ' ' + product.product_model} imageAlt={product.product_brand + ' ' + product.product_model} imageSrc={product.product_img} productPrice={product.product_price}/>
      </Link>)
      }
    </div>
  )
}

export default ProductListGallery