import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../../data.js";
import styles from "./brandpage.module.css";
const BrandPage = () => {
  const { heading, brandName } = useParams();

  
  const [searchText, setSearchText] = useState("");
  const selectedCategory = data.find((item) => item.heading === `${heading}`);
  const brand = selectedCategory.Brands.find(
    (brand) => brand.name === brandName
  );
  return (
    <>
      <div className={styles["brand-page-container"]}>
        <div className={styles["new-brand"]}>
          <div className={styles["new"]}>
            <div className={styles["breadcrumb-search"]}>
              <h2 className={styles["brand-heading"]}>Sell Old {brandName}</h2>
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
              </div>
              <p className="select-model">select model</p>
            </div>

            <div className={styles["search-box"]}>
              <input
                type="text"
                placeholder="new"
                className={styles["search-placeholder"]}
              />
            </div>
          </div>
          <div className={styles["brand-models-container"]}>
            {brand.models.map((model, index) => (
              <Link
                key={index}
                to={`${model.name}`}
                className={styles["brand-model-box"]}
              >
                <img src={model.logo} alt={model.name} />
                <p className={styles["link-style"]}>{model.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandPage;
