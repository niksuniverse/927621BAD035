import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

export const ProductContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  
  return (
    <ProductContext.Provider value={{ products, setProducts, filters, setFilters }}>
      <Router>
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
};

export default App;
