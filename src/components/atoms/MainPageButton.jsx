import React from 'react'
import './styles/buttonsStyling.css'

const MainPageButton = ({ content }) => {
  return (
    <button
      className='buttonStyles'
      >
      {content}
    </button> 
  )
}

export default MainPageButton