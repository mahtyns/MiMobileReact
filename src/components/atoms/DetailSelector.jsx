import React from 'react';
import './styles/textStyling.css'

const DetailSelector = ({selectorName, selectorValues, selectedCode}) => {

  const defaultValue = selectorValues[0];

  return (
      <select className='detailSelector' name={selectorName} onChange={selectedCode}>
        {selectorValues.map(selector => <option defaultValue={defaultValue} value={selector.code} key={selector.code}>{selector.value}</option>)}
      </select>
  )
}

export default DetailSelector