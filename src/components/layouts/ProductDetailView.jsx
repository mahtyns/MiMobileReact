//Detalles del producto

import React from 'react'
import { ImageMain } from '../atoms/ImageMain'
import PageTitle from '../atoms/PageTitle'
import { ProductDetailInfo } from '../organisms/ProductDetailInfo'
import './styles/layoutStyles.css'

const ProductDetailView = ({productList}) => {
  return (
    <div className='productDetailsContainer'>
      <div className="titleBar">
        <PageTitle content={'Product Details'}/>
      </div>
      <div className="productInfoContainer">
      <ImageMain imageAlt={'alt'} imageSrc={productList[0].imgSrc}/>
      <div className='descriptionActionContainer'>
        <ProductDetailInfo />
      </div>
      </div>
    </div>
  )
}

export default ProductDetailView