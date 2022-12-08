import React from 'react';
import Product from './Product';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div className="page__content">
        <h1>Products</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="book">Book</Link>
          </li>
          <li className="navigation__item">
            <Link to="ball">Ball</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<span>Select a product please</span>} />
          <Route path=":productId" Component={Product} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
