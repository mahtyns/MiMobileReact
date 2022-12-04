// Listado de productos y la barra de busqueda

import React from 'react'
import PageTitle from '../atoms/PageTitle'
import SearchBar from '../molecules/SearchBar'
import ProductListGallery from '../organisms/ProductListGallery'
import './styles/layoutStyles.css'
import { useState } from 'react'

const ProductListView = ({productList}) => {

  const [searchItem, setSearchItem] = useState('')

  const searchItemTyping = (e) => {
    setSearchItem(e.target.value) 
  }

  return (
    <div className='productGalleryContainer'>
      <div className="titleBar">
        <PageTitle content={'Shop products'}/>
        <SearchBar searchItemTyping={searchItemTyping}/>
      </div>
      <div className="productGallery">
        <ProductListGallery 
        searchItem={searchItem}
        productList={productList}/>
      </div>  
    </div>
  )
}

export default ProductListView