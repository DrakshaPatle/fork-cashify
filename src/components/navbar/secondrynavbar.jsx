import React, { useState } from 'react';
import './secondrynavbar.css';
import ProductList from './productlist';
// import jsonData from "./components/navbar/data.json"
const jsonData = {
  "All": {
    "phone": [
      "iPhone",
      "Samsung Galaxy",
      "Google Pixel",
      "OnePlus",
      "Xiaomi",
      "Sony Xperia",
      "LG"
    ],
    "tablet": [
      "iPad",
      "Samsung Galaxy Tab",
      "Microsoft Surface",
      "Amazon Fire",
      "Lenovo Tab"
    ],
    "smartphone": [
      "iPhone",
      "Samsung Galaxy",
      "Google Pixel",
      "OnePlus",
      "Xiaomi",
      "Sony Xperia",
      "LG"
    ],
    "laptop": [
      "Apple MacBook",
      "Dell XPS",
      "HP Spectre",
      "Lenovo ThinkPad",
      "Asus ZenBook",
      "Microsoft Surface"
    ]
  }
};

const SecondaryNavbar = () => {
  const tabNames = ['All', 'Sell Phone ', 'Sell Gadgets', 'Buy Phone', 'Find NEw GAdgets', 'Recycle', 'Cashify Store', ' More'];
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleToggleAll = () => {
    setShowAll(!showAll);
    setSelectedCategory('');
    setSelectedProducts([]);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedProducts(jsonData.All[category]);
    setShowAll(true); 
  };

  return (
    <>
      <div>
        <hr className="navbar-separator" />
        <nav className="secondary-navbar">
          <ul className="nav-list">
            {tabNames.map((tab, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href="#" onClick={handleToggleAll}>
                  {tab}
                  <i className="dropdown-icon"></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <hr className="navbar-separator" />
      </div>

      {showAll && (
        <div className="container">
          <div className="lists-container">
            <ul className="categories-list">
              {Object.keys(jsonData.All).map(category => (
                <li key={category} onClick={() => handleCategoryClick(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {selectedCategory && (
        <div className="product-list-container">
          <ProductList products={selectedProducts} />
        </div>
      )}
    </>
  );
};

export default SecondaryNavbar;
