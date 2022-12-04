import React from 'react';
import './styles/textStyling.css'

const BreadcrumbLink = ({linkName}) => {
  return (
    <div className='linkBreadcrumbs'>{linkName}</div>
  )
}

export default BreadcrumbLink