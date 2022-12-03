import React from 'react'
import './styles/buttonsStyling.css'

const Button = ({content, handleClick}) => {
  return (
    <button 
        className='buttonStyles'
        onClick={()=>handleClick}>
        {content}
    </button> 
  )
}

export default Button