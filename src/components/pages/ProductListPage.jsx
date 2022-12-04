import React from 'react';
import ProductListView from '../layouts/ProductListView';
import './styles/pageStyles.css'

const ProductListPage = ({productList}) => {
  return (
    <div className='mainPageContainer'>
      <ProductListView productList={productList} />
    </div>
  )
}

export default ProductListPage