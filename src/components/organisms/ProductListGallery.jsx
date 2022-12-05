//Los "items" - contenedor general del grid de productos

import React from 'react'
import ProductItemListed from '../molecules/ProductItemListed'
import './styles/organismStyles.css'
import { Link } from "react-router-dom";

const ProductListGallery = ({ productList, searchItem }) => {

  return (
    // <div className='productGridContainer'>
    //   {productList.map(product => 
    //     <Link key={product.product_id} to={`/products/${product.product_id}`}>
    //     <ProductItemListed 
    //       key={product.product_id} 
    //       productName={product.product_brand + ' ' + product.product_model} 
    //       imageAlt={product.product_brand + ' ' + product.product_model} 
    //       imageSrc={product.product_img} 
    //       productPrice={product.product_price}/>
    //     </Link>)
    //     }
    // </div>
    <div className='productGridContainer'>
      {
        productList.filter(product => {
          if (searchItem === '') return <ProductItemListed key={product.product_id} productPrice={product.product_price} imageSrc={product.product_img}  productName={product.product_brand + ' ' + product.product_model} />
          else if (product.product_brand.toLowerCase().includes(searchItem.toLowerCase())) return <ProductItemListed key={product.product_id} productPrice={product.product_price} imageSrc={product.product_img} productName={product.product_brand + ' ' + product.product_model} />
          else if (product.product_model.toLowerCase().includes(searchItem.toLowerCase())) return <ProductItemListed key={product.product_id} productPrice={product.product_price} imageSrc={product.product_img} productName={product.product_brand + ' ' + product.product_model} />
        }).map(product => <Link key={product.product_id} to={`/products/${product.product_id}`}>
        <ProductItemListed key={product.product_id} productPrice={product.product_price} imageSrc={product.product_img} productName={product.product_brand + ' ' + product.product_model} />
        </Link>
        )
      }
    </div>
  )
}

export default ProductListGallery