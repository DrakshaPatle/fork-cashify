import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data.js";
import styles from "./productpage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
 
const ProductPage = () => {
  const { heading, brandName, productName } = useParams();
  const selectedCategory = data.find((item) => item.heading === `${heading}`);
  const brand = selectedCategory.Brands.find(
    (brand) => brand.name === brandName
  );
  const product = brand.models.find(
    (model) => model.name === productName
  );
  return (
    <>
      <div className={styles["main-container"]}>
        <h1>sell old {product.name}</h1>
        <div className={styles["breadcrumb"]}>
          <Link to="/" className={styles["link-style"]}>
            Home
          </Link>
          <span> &gt; </span>
          <Link to={`/${heading}`} className={styles["link-style"]}>
            {heading}
          </Link>
          <span> &gt; </span>
          <Link
            to={`/${heading}/${brandName}`}
            className={styles["link-style"]}
          >
            {brandName}
          </Link>
          <span> &gt; </span>
          <span>{product.name}</span>
        </div>
        <div className={styles["product-page-container"]}>
          <div className={styles["product-image"]}>
            <img
              src={product.logo}
              alt={product.name}
              className={styles["product-img"]}
            />
          </div>
          <div className={styles["product-info"]}>
            <h2>{product.name}</h2>
            <p>Get upto</p>
            {/* <FontAwesomeIcon icon={faRupeeSign} /> */}
            <h2 className={styles["price"]}>{product.price}</h2>
            <button className={styles["exact-value-btn"]}>
              get exact value  &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
