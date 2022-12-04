import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import DetailSelector from '../atoms/DetailSelector'
import Button from '../atoms/Button'
import './styles/moleculeStyles.css'

const ProductActions = ({productMemory, productColor}) => {
  return (
    <div className='productActionsContainer'>
      <SectionTitle sectionTitle={'Choose properties'}/>
      <div className='selectorContainer'>
        <DetailSelector selectorName={'Memory'} selectorValues={productMemory}/>
        <DetailSelector selectorName={'Color'} selectorValues={productColor}/>
      </div>
      <div className="buttonContainer">
        <Button content={'Add to cart'} />
      </div>
    </div>
  )
}

export default ProductActions