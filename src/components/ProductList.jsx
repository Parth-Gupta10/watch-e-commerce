import React, { useContext } from 'react';
import Product from './Product';
// import {storeProducts} from "../data";
import {product} from "../context";

const ProductList = (props) => {
  const value = useContext(product);
  const productItems = value.products.map((product) => {
    return(
      <Product
        key={product.id}
        id={product.id}
        img={product.img}
        title={product.title}
        price={product.price}
        inCart={product.inCart}
      />
    );
  });
  return (
  <div className="container">
    <div className="main-heading-container">
      <h1 className="main-heading">Our Products</h1>
    </div>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {productItems}
    </div>
  </div>
)
}

export default ProductList;
