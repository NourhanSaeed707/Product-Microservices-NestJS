import React from 'react';
import Products from './admin/Products';
import { Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import ProductCreate from './admin/components/ProductCreate';
import ProductsUpdate from './admin/components/ProductsUpdate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin/product" element={<Products />} />
      <Route path="/admin/product/create" element={<ProductCreate />} />
      <Route path="/admin/product/:id/edit" element={<ProductsUpdate />} />
      <Route
        path="/admin/products"
        element={<Products />}
      />
    </Routes>
  );
}

export default App;