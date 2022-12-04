// Listado de productos y la barra de busqueda

import React from 'react'
import PageTitle from '../atoms/PageTitle'
import SearchBar from '../molecules/SearchBar'
import ProductListGallery from '../organisms/ProductListGallery'
import './styles/layoutStyles.css'

const ProductListView = ({productList}) => {
  return (
    <div className='productGalleryContainer'>
      <div className="titleBar">
        <PageTitle content={'Shop products'}/>
        <SearchBar />
      </div>
      <div className="productGallery">
        <ProductListGallery productList={productList}/>
      </div>  
    </div>
  )
}

export default ProductListView