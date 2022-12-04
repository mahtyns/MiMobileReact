import React from 'react'
import './styles/moleculeStyles.css'
import BreadcrumbLink from '../atoms/BreadcrumbLink'
import { Link, useLocation } from "react-router-dom";


const Breadcrumbs = () => {

  const location = useLocation();
  const currentPath = window.location.href;
  console.log(currentPath)

  return (
    <div className='breadcrumbsContainer'>
      <Link to='/' >
      <BreadcrumbLink linkName={'Home'}/>
      </Link>
      { location.pathname !== '/' ?
      <>
      <BreadcrumbLink linkName={location.pathname} />
      <BreadcrumbLink linkName={null}   />
      </>
        : null
      }
    </div>
  )
}

export default Breadcrumbs