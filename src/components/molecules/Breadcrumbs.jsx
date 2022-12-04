import React from 'react'
import './styles/moleculeStyles.css'
import BreadcrumbLink from '../atoms/BreadcrumbLink'
import { Link } from "react-router-dom";


const Breadcrumbs = () => {
  return (
    <div className='breadcrumbsContainer'>
      <Link to='/' >
      <BreadcrumbLink linkName={'Home'}/>
      </Link>
      <p> {'/'} </p>
      <BreadcrumbLink linkName={null} />
      <p> {'/'} </p>
      <BreadcrumbLink linkName={null} />
    </div>
  )
}

export default Breadcrumbs