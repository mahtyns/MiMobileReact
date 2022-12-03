import React from 'react';
import './styles/textStyling.css'

const Link = ({linkName}) => {
  return (
    <div className='linkBreadcrumbs'>{linkName}</div>
  )
}

export default Link