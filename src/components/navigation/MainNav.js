import React from "react";
import { NavLink } from "react-router-dom";

import css from "./style/MainNav.module.css";
import CartIcon from "../cartIcon/CartIcon.js";


const MainNav = () => {
  return (
    <div className={css.nav_container}>
      <nav className={css.nav_header}>
        <div className={css.nav_logo}>
          <NavLink to="/">
            <h1>Ecomm</h1>
          </NavLink>
        </div>
        <ul className={css.nav_list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
        </ul>
        <CartIcon />
      </nav>
    </div>
  );
};

export default MainNav;
