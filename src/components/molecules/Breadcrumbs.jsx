import React from 'react'
import './styles/moleculeStyles.css'
import BreadcrumbLink from '../atoms/BreadcrumbLink'

const Breadcrumbs = () => {
  return (
    <div className='breadcrumbsContainer'>
      <BreadcrumbLink linkName={'Home'}/>
      <p> {'/'} </p>
      <BreadcrumbLink linkName={null} />
      <p> {'/'} </p>
      <BreadcrumbLink linkName={null} />
    </div>
  )
}

export default Breadcrumbs