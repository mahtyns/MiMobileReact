import React from 'react'
import './styles/moleculeStyles.css'
import BreadcrumbLink from '../atoms/BreadcrumbLink'
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {

  const location = useLocation();

  return (
    <div className='breadcrumbsContainer'>
      <Link to="/">
      <BreadcrumbLink linkName={'Home'}/>
      { location.pathname !== '/' ?
      <>
      <BreadcrumbLink linkName={location.pathname} />
      </>
        : null
      } 
      </Link >
    </div>
  )
}

export default Breadcrumbs