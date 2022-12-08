import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="products">Products</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
