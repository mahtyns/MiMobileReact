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
            <Route path='/' element={<MainPage />}/>
            <Route 
            path='/products' 
            element={<ProductListView productList={products} />} />
            <Route 
            path={`/products1`}
            element={<ProductDetailView />} />
        </Routes>
        </Router>
    </div>
  )
}

export default Routing