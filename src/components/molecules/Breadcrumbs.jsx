import React from 'react'
import './styles/moleculeStyles.css'
import BreadcrumbLink from '../atoms/BreadcrumbLink'
import { useLocation } from "react-router-dom";


const Breadcrumbs = () => {

  const location = useLocation();

  return (
    <div className='breadcrumbsContainer'>
      <BreadcrumbLink linkName={'Home'}/>
      { location.pathname !== '/' ?
      <>
      <BreadcrumbLink linkName={location.pathname} />
      </>
        : null
      }
    </div>
  )
}

export default Breadcrumbs