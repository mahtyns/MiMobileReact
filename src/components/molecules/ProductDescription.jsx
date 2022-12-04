import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import DescriptionText from '../atoms/DescriptionText'
import './styles/moleculeStyles.css'

const ProductDescription = () => {
  return (
    <div className='descriptionContainer'>
      <SectionTitle sectionTitle={'Product Description'}/>
      <div className="descriptionElementsContainer">
      <div className='descriptionElement'>
          <DescriptionText variant={'boldText'} content={''} />
          <DescriptionText content={''} />
      </div>  
      </div>
    </div>
  )
}

export default ProductDescription