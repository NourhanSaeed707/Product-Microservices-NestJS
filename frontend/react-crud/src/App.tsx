import React from 'react';
import Products from './admin/Products';
import { Route, Routes } from 'react-router-dom';
import Main from './main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin/product" element={<Products />} />
      <Route
        path="/admin/products"
        element={<Products />}
      />
    </Routes>
  );
}

export default App;