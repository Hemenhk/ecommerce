import React from "react";
import { NavLink } from "react-router-dom";

import css from "./style/MainNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

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
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
        </ul>
        <div className={css.nav_cart}>
          <FontAwesomeIcon icon={faCartShopping} className={css.nav_icon} />
          <div className={css.nav_cart_amount}>5</div>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
