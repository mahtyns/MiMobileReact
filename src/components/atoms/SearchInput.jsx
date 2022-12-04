import React from 'react'
import './styles/textStyling.css'

export const SearchInput = ({ searchItemTyping }) => {
  return (
    <input className='searchInput' placeholder='Search...' onChange={searchItemTyping}/>
  )
}

export default SearchInput