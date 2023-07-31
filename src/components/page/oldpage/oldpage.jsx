import React, { useState, useEffect } from "react";
import styles from "./oldpage.module.css"; // Import the CSS module
import { Link } from "react-router-dom";
import { data } from "../../data.js";

const OldPage = () => {
  const [selectedHeading, setSelectedHeading] = useState("sell-phone");
  const [searchPlaceholder, setSearchPlaceholder] = useState(
    "Search your mobile phone to sell"
  );
  const [selectedLogos, setSelectedLogos] = useState([]);

  useEffect(() => {
    const currentRoute = window.location.pathname;
    const routeParts = currentRoute.split("/");
    const selectedHeadingFromRoute = routeParts[routeParts.length - 1];
    setSelectedHeading(selectedHeadingFromRoute);
    setSearchPlaceholder(
      `Search your ${selectedHeadingFromRoute.toLowerCase()} to sell`
    );

    const selectedBrandArray = data.find(
      (item) => item.route === `/${selectedHeadingFromRoute}`
    );
    const logos = selectedBrandArray
      ? selectedBrandArray[selectedHeadingFromRoute + "Brands"].slice(0, 4)
      : [];
    setSelectedLogos(logos);
  }, []);

  return (
    <>
      <div className={styles["old-container"]}>
        <div className={styles["breadcrumb"]}>
          <Link to="/" className={styles["link-style"]}>
            Home
          </Link>
          <span> &gt; </span>
          <Link to={`/${selectedHeading}`} className={styles["link-style"]}>
            {selectedHeading}
          </Link>
          <span> &gt; </span>
        </div>

        <div className={styles["right-section"]}>
          <div className={styles["second-container"]}>
            <h1>{selectedHeading} for Instant Cash</h1>
            <p className={styles["maximum-heading"]}>
              <img src="/rightlogo.svg"></img> 
               Maximum Value
              <img src="/rightlogo.svg"></img> Safe & Hassle-free{" "}
              <img src="/rightlogo.svg"></img> Free Doorstep Pickup
            </p>
            <div className={styles["search-box"]}>
              <input
                type="text"
                placeholder={searchPlaceholder}
                className={styles["search-placeholder"]}
              />
            </div>
            <h4 className={styles["choose-brand"]}>Choose your brand</h4>
            <div className={styles["brand-container"]}>
              {selectedLogos.map((brand, index) => (
                <Link
                  key={index}
                  to={`/${selectedHeading}/${brand.name}`}
                  className={styles["brand-link"]}
                >
                  <img src={brand.logo} alt={brand.name} />
                </Link>
              ))}
            </div>
            <p className={styles["more-brands"]}>More Brands &rarr;</p>
          </div>

          <div className={styles["right-image"]}>
            <img
              src="https://s3n.cashify.in/estore/c45a45e02d0646e2b9ae0b55a85692d7.png"
              width={400}
              alt="Right Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OldPage;
