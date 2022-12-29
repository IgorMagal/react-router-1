import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

/* <Link to="/welcome">Welcome</Link> */
/* <Link to="/products">Products</Link> */

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styles.linkActive} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.linkActive} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
