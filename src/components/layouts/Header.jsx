import React from 'react'
import './styles/headerStyles.css'
import Logo from '../atoms/Logo'
import Breadcrumbs from '../molecules/Breadcrumbs'
import ShoppingCart from '../molecules/ShoppingCart'

const Header = () => {
  return (
    <div className='headerContainer'>
      <Logo />
      <Breadcrumbs />
      <ShoppingCart />
    </div>
  )
}

export default Header