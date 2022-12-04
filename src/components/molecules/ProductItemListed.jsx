import React from 'react'
import GalleryImage from '../atoms/GalleryImage'
import ProductName from '../atoms/ProductName'
import ProductPrice from '../atoms/ProductPrice'
import './styles/moleculeStyles.css'

const ProductItemListed = ({ productName, imageSrc, imageAlt, productPrice }) => {
  return (
    <div className='itemContainer'>
        <GalleryImage imageAlt={imageAlt} imageSrc={imageSrc}/>
        <div className='productDescriptionShort'>
        <ProductName productName={productName} variant={'gallery'}/>
        <ProductPrice productPrice={productPrice} variant={'gallery'} />
        </div>
    </div>
  )
}

export default ProductItemListed