import React from 'react';
function Product({ ...rest }) {
  console.log(rest);
  return <div className="product">product</div>;
}

export default Product;
