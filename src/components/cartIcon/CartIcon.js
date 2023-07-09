import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import classes from "./style/CartIcon.module.css";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const navigate = useNavigate()
  localStorage.getItem("cart")
  const cart = useSelector((state) => state.cart);
  const { itemCount, cartItems } = cart;
  console.log(cartItems)

  const cartNavigateHandler = () => {
    navigate("/cart")
  }
  return (
    <div className={classes.nav_cart} onClick={cartNavigateHandler}>
      <FontAwesomeIcon icon={faCartShopping} className={classes.nav_icon} />
      {itemCount > 0 ? (
        <span className={classes.nav_cart_amount}>{itemCount}</span>
      ) : null}
    </div>
  );
};

export default CartIcon;
