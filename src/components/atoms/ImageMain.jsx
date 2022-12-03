import React from 'react'
import './styles/imageStyling.css'

export const ImageMain = ({imageAlt, imageSrc}) => {
  return (
      <img className='mainProductImage' alt={imageAlt} src={imageSrc}/>
  )
}
