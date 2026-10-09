import React from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Products from './admin/Products';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Nav />

      <div className="row">
        <aside className="sidebar col-md-3 col-lg-2 bg-body-tertiary border-end min-vh-100">
          <Menu />
        </aside>

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
          </div>
          <Routes>
            <Route path="/admin/products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;