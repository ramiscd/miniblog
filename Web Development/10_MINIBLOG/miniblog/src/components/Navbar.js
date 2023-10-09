import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        Mini <span>Blog</span>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">Sobre</NavLink>
        </li>
      </NavLink>
    </nav>
  );
};

export default Navbar;
