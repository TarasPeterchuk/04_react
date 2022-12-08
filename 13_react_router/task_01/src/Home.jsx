import React, { Component } from 'react';
import Products from './Products';
class Home extends Component {
  render() {
    return (
      <>
        <div className="page__content">
          <h1>🏠</h1>
          <a href="/products">To products</a>
        </div>

        {/* <Products /> */}
      </>
    );
  }
}

export default Home;
