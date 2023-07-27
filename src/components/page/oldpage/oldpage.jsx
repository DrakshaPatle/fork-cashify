import React from "react";
import { useState } from "react";
import "./oldpage.css"
const OldPage = () => {
  const [selectedHeading, setSelectedHeading] = useState("Sell Phone");
  const [searchPlaceholder, setSearchPlaceholder] = useState(
    "Search your mobile phone to sell"
  );

  const handleBoxClick = (heading) => {
    setSelectedHeading(heading);
    setSearchPlaceholder(`Search your ${heading.toLowerCase()} to sell`);
  };

  return (
    <div className="right-section">
        
      <div >
        <h3>{selectedHeading}</h3>
        <p>Maximum Value | Safe & Hassle-free | Free Doorstep Pickup</p>
        <div className="search-box">
          <input type="text" placeholder={searchPlaceholder} />

          {/* <span className="search-icon">&#128269;</span> */}
        </div>
        <h4>Choose your brand</h4>
        <div className="brand-container">{/* Brand boxes here */}</div>
        <p className="more-brands">More Brands &rarr;</p>
      </div>


      <div className="right-image">
      <img 
        src ="https://s3n.cashify.in/estore/c45a45e02d0646e2b9ae0b55a85692d7.png"  margin = {50} width={ 400}>
        
        </img>
      </div>

    </div>
  );
};

export default OldPage;
