//Buscador input e imagen
import React from 'react'
import SearchInput from '../atoms/SearchInput'
import SearchIcon from '../atoms/SearchIcon'
import './styles/moleculeStyles.css'

const SearchBar = () => {
  return (
    <div className='searchBarContainer'>
      <SearchIcon />
      <SearchInput />
    </div>
  )
}

export default SearchBar