import React from "react";
import "./productlist.css";
const ProductList = ({ products }) => {
  return (
    <div className="products-container">
      <ul className="categories-list">
        {products.map((product) => (
          <div key={product}>
            <li> {product}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
