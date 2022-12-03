import React from 'react';
import classNames from 'classnames'
import './styles/textStyling.css'

const DescriptionText = ({variant, content}) => {

  const descriptionVariants = classNames('textDescriptions', 
  {
    'boldText': variant === 'boldText',
  })
    
  return (
      <div className={descriptionVariants}>{content}</div>
  )
}

export default DescriptionText