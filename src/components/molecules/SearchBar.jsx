//Buscador input e imagen
import React from 'react'
import SearchInput from '../atoms/SearchInput'
import SearchIcon from '../atoms/SearchIcon'
import './styles/moleculeStyles.css'

const SearchBar = ({ searchItemTyping }) => {
  return (
    <div className='searchBarContainer'>
      <SearchIcon />
      <SearchInput searchItemTyping={searchItemTyping} />
    </div>
  )
}

export default SearchBar