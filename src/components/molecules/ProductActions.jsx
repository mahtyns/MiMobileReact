import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import DetailSelector from '../atoms/DetailSelector'
import './styles/moleculeStyles.css'

const ProductActions = ({ productMemory, productColor, chooseMemory, chooseColor }) => {
  return (
    <div className='productActionsContainer'>
      <SectionTitle sectionTitle={'Choose properties'}/>
      <div className='selectorContainer'>
        <DetailSelector selectorName={'Memory'} selectorValues={productMemory} selectedCode={chooseMemory}/>
        <DetailSelector selectorName={'Color'} selectorValues={productColor} selectedCode={chooseColor}/>
      </div>
    </div>
  )
}

export default ProductActions