import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        
        <ul className={styles.links_list}>
          Mini <span>Blog</span>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive? styles.active : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={({isActive}) => (isActive? styles.active : "")}>Entrar</NavLink>
          </li>
          <li>
            <NavLink to="/register" className={({isActive}) => (isActive? styles.active : "")}>Registrar</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => (isActive? styles.active : "")}>Sobre</NavLink>
          </li>
        </ul>
      </NavLink>
    </nav>
  );
};

export default Navbar;
