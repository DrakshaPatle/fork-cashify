import React from "react";
import styles from "./primarynavbar.module.css"; // Import the CSS module
import { VscZoomOut } from "react-icons/vsc";

const PrimaryNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src="/navlogo.svg" alt="Logo" />
        </div>
        <div className={styles["search-box"]}>
          <input
            type="text"
            placeholder="seaarch device here "
            className={styles["search-placeholder"]}
          />
             <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <button className={styles["login-button"]}>Login</button>
      </div>
    </nav>
  );
};

export default PrimaryNavbar;
