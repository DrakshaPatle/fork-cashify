import React from 'react';
import styles from  './secondnavbar.module.css'; 
import MenuItem from './MenuItems'; 
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    // <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
    <ul className={`${styles.dropdown} ${styles[dropdownClass]} ${dropdown ? styles.show : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItem items={submenu} key={index} depthLevel={depthLevel} /> 
      ))}
    </ul>
  );
};

export default Dropdown;
