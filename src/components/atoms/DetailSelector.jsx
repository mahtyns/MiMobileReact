import React from 'react';
import './styles/textStyling.css'

const DetailSelector = ({selectorName, selectorValues, selectedCode}) => {

  return (
    <select className='detailSelector' name={selectorName} onChange={selectedCode} value={selectorValues[0].code} defaultValue={selectorValues[0].code} >
        {selectorValues.map(selector => 
        <option 
        value={selector.code} 
        key={selector.code}
        >
              {selector.value}
        </option>)}
      </select>
  )
}

export default DetailSelector