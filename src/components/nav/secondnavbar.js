import { menuItems} from "./menuItems copy";
import styles from "./secondnavbar.module.css"
import MenuItems from "./MenuItems";
const CopyNavbar = () => {
  return (
    <nav>
      <ul className={styles['menus']}>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default CopyNavbar;

