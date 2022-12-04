import React from 'react';
import './styles/imageStyling.css'

const GalleryImage = ({imageAlt, imageSrc}) => {
  return (
      <img className='galleryImageItem' alt={imageAlt} src={imageSrc}/>
  )
}

export default GalleryImage