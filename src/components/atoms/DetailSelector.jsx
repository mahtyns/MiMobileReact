import React from 'react';
import './styles/textStyling.css'

const DetailSelector = ({selectorName, selectorValues}) => {
  return (
      <select className='detailSelector' name={selectorName} required >
        {selectorValues.map(selector => <option>{selector}</option>)}
      </select>
  )
}

export default DetailSelector