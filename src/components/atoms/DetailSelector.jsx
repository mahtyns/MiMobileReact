import React from 'react';
import './styles/textStyling.css'

const DetailSelector = ({selectorName, selectorValues}) => {
  return (
      <select className='detailSelector' name={selectorName} required >
        {selectorValues.map(selector => <option key={selector.code}>{selector.value}</option>)}
      </select>
  )
}

export default DetailSelector