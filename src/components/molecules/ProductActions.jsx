import React from 'react'
import SectionTitle from '../atoms/SectionTitle'
import DetailSelector from '../atoms/DetailSelector'
import Button from '../atoms/Button'
import './styles/moleculeStyles.css'

const ProductActions = () => {
  return (
    <div className='productActionsContainer'>
      <SectionTitle sectionTitle={'Choose properties'}/>
      <div className='selectorContainer'>
        <DetailSelector selectorName={'Memory'} selectorValues={null}/>
        <DetailSelector selectorName={'Color'} selectorValues={null}/>
      </div>
      <div className="buttonContainer">
        <Button content={'Add to cart'} />
      </div>
    </div>
  )
}

export default ProductActions