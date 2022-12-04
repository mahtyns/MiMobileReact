import React from 'react'
import GalleryImage from '../atoms/GalleryImage'
import ProductName from '../atoms/ProductName'

const ProductItemListed = ({productName, imageSrc, imageAlt}) => {
  return (
    <div className='itemContainer'>
        <GalleryImage imageAlt={imageAlt} imageSrc={imageSrc}/>
        <ProductName productName={productName} variant={'gallery'}/>
    </div>
  )
}

export default ProductItemListed