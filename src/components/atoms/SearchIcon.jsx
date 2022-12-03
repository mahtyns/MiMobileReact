import React from 'react';
import img from '../../resources/search.png';
import './styles/imageStyling.css'

const SearchIcon = () => {
    return (
        <img className='searchIcon' src={img} alt='Cart' />
    )
}

export default SearchIcon