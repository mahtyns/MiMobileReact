//Los "items" - contenedor general del grid de productos

import React from 'react'
import ProductItemListed from '../molecules/ProductItemListed'
import './styles/organismStyles.css'


const ProductListGallery = ({productList}) => {
  return (
    <div className='productGridContainer'>
      {productList.map(product => <ProductItemListed productName={product.name} imageAlt={product.imgAlt} imageSrc={product.imgSrc}/>)}
    </div>
  )
}

export default ProductListGallery