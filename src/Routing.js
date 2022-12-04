import React from 'react';
import Header from './components/layouts/Header';
import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ProductListView from './components/layouts/ProductListView';
import products from './data-prueba';
import ProductDetailView from './components/layouts/ProductDetailView';


const Routing = ({productsInCartNumber, addItemToCart, chooseMemory, chooseColor}) => {

  return (
    <div>
        <Router >
        <Header 
        productsInCartNumber={productsInCartNumber}/>
        <Routes>
            <Route path='/' exact element={<ProductListView productList={products} />}/>
  
            <Route 
            path={'products/:product_id'}
            element={<ProductDetailView 
            productList={products}
            addItemToCart={addItemToCart}
            chooseMemory={chooseMemory}
            chooseColor={chooseColor}
            />} />
        </Routes>
        </Router>
    </div>
  )
}

export default Routing