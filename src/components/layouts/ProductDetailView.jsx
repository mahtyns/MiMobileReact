//Detalles del producto
import React from 'react'
import { ImageMain } from '../atoms/ImageMain'
import PageTitle from '../atoms/PageTitle'
import { ProductDetailInfo } from '../organisms/ProductDetailInfo'
import './styles/layoutStyles.css'
import { useParams } from "react-router-dom";

const ProductDetailView = ({ productList, addItemToCart, chooseMemory, chooseColor }) => {

  const {product_id} = useParams();
  // const selected_product = productList.find(product => product.product_id === product_id)
  const selected_product = productList[product_id]
  // console.log(selected_product, productList)

  return (
    <div className='productDetailsContainer'>
      <div className="titleBar">
        <PageTitle content={'Product Details'}/>
      </div>
      <div className="productInfoContainer">
        <ImageMain imageAlt={selected_product.product_model} imageSrc={selected_product.product_img}/>
      <div className='descriptionActionContainer'>
        <ProductDetailInfo 
        productMemory={selected_product.product_memory}
        productColor={selected_product.product_color}
        productDescription={selected_product}
        addItemToCart={addItemToCart}
        chooseMemory={chooseMemory}
        chooseColor={chooseColor}     
        />
      </div>
      </div>
    </div>
  )
}

export default ProductDetailView