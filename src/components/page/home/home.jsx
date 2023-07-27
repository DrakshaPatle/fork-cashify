import React from 'react';
import { useState } from 'react';
import "./hompage.css"
const HomePage = () => {

  
  const data = 
    [
        {
          "id": "sellPhone",
          "imageSrc": "https://s3n.cashify.in/imageLibrary/sell_phone_deab8bbb0bb7.png",
          "heading": "Sell Phone",
          "route": "/sell-phone"
        },
        {
          "id": "tv",
          "imageSrc": "https://s3n.cashify.in/imageLibrary/sell-televisions_a39af2409e9d.png",
          "heading": "TV",
          "route": "/tv"
        },
        {
          "id": "laptop",
          "imageSrc": "https://s3n.cashify.in/imageLibrary/sell_laptop_f907031d0445.png",
          "heading": "Laptop",
          "route": "/laptop"
        },
        {
          "id": "laptop",
          "imageSrc": "https://s3n.cashify.in/imageLibrary/sell_desktops_f4b0938ebce3.png",
          "heading": "Laptop",
          "route": "/laptop"
        },
        {
          "id": "tablet",
          "imageSrc": "https://s3n.cashify.in/imageLibrary/sell_car_8ad42172f2c3.png",
          "heading": "Tablet",
          "route": "/tablet"
        },
        {
          "id": "tablet",
          "imageSrc": "https://s3n.cashify.in/imageLibrary/sell_gaming_consoles_396669e225d0.png",
          "heading": "Tablet",
          "route": "/tablet"
        },
        {
          "id": "tablet",
          "imageSrc": "https://s3n.cashify.in/imageLibrary/sell_tablet_617881c0b0b1.png",
          "heading": "Tablet",
          "route": "/tablet"
        }
      ]
      
  
  return (
  
    <div>
      <h5>Sell</h5>
      <div className="box-container">
      {data.map((box) => (
        <a  className='item-heading'key={box.id} href={box.route}>
          <div className="box">
            <img src={box.imageSrc} alt={box.heading} />
            <h6 >{box.heading}</h6>
          </div>
        </a>
      ))}
      </div>
    </div>
  
  );
};

export default HomePage;
