import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../../data.js";
import styles from "./brandpage.module.css";
const BrandPage = () => {
  const { heading, brandName } = useParams();
  const [searchText, setSearchText] = useState("");
  const selectedBrandArray = data.find((item) => item.route === `/${heading}`);
  const brand = selectedBrandArray[heading + "Brands"].find(
    (b) => b.name.toLowerCase() === brandName.toLowerCase()
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
                  to={`/${heading}/${brandName.toLowerCase()}`}
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
                to={`/${heading}/${brandName.toLowerCase()}/${model.name.toLowerCase()}`}
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
