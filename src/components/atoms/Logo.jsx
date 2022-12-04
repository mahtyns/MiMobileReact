import React from 'react'
import './styles/imageStyling.css'
import { Link } from "react-router-dom";

const Logo = () => {

  return (
    <div className='logoStyles'><Link to="/">MiMobile</Link></div>
  )
}

export default Logo