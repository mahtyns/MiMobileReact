import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import DescriptionText from '../atoms/DescriptionText'
import './styles/moleculeStyles.css'
import ProductPrice from '../atoms/ProductPrice'

const ProductDescription = ({productDescription}) => {
  return (
    <div className='descriptionContainer'>
      <SectionTitle sectionTitle={'Product Description'}/>
      <div className="descriptionElementsContainer">
      <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Brand'} />
          <DescriptionText content={productDescription.product_brand} />
      </div>  
      <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Model'} />
          <DescriptionText content={productDescription.product_model} />
      </div>  
      <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'CPU'} />
          <DescriptionText content={productDescription.product_CPU} />
      </div>  
      <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Screen Size'} />
          <DescriptionText content={productDescription.product_size} />
      </div>  
      <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'RAM Memory'} />
          <DescriptionText content={productDescription.product_RAM} />
      </div>  
      <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Operating system'} />
          <DescriptionText content={productDescription.product_OS} />
      </div>
        <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Display resolution'} />
          <DescriptionText content={productDescription.product_display} />
        </div>
        <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Battery'} />
          <DescriptionText content={productDescription.product_battery} />
        </div>
        <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Camera'} />
          <DescriptionText content={productDescription.product_camera} />
        </div>   
        <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Size'} />
          <DescriptionText content={productDescription.product_dimensions} />
        </div> 
        <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Weight'} />
          <DescriptionText content={productDescription.product_weight} />
        </div>
        <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={'Price'} />
          <ProductPrice productPrice={productDescription.product_price} /> 
        </div>   
      </div>
      
    </div>
  )
}

export default ProductDescription