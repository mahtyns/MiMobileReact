import React from 'react';
import Header from './components/layouts/Header';
import { Routes, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import ProductListView from './components/layouts/ProductListView';
import products from './data-prueba';
import ProductDetailView from './components/layouts/ProductDetailView';
import MainPage from './components/layouts/MainPage';


const Routing = () => {

  return (
    <div>
        <Router >
        <Header />
        <Routes>
            <Route path='/' exact element={<MainPage />}/>
            <Route 
            path='products' exact
            element={<ProductListView productList={products} />} />
            <Route 
            path={':product_id'}
            element={<ProductDetailView productList={products}/>} />
        </Routes>
        </Router>
    </div>
  )
}

export default Routing