import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./style/CartPage.module.css";
import { useDispatch } from "react-redux";
import { setClearCart } from "../../redux/reducers/cartSlice.js";

const CartTotal = ({ itemCount, total }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkoutNavHandler = () => {
    navigate("/checkout");
  };

  const clearCartHandler = () => {
    dispatch(setClearCart());
  };
  
  return (
    <div className={classes.total_container}>
      <div className={classes.total_info}>
        <p>Total items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </div>
      <div className={classes.checkout}>
        <button className={classes.btn_checkout} onClick={checkoutNavHandler}>
          CHECKOUT
        </button>
        <button className={classes.btn_clear} onClick={clearCartHandler}>CLEAR</button>
      </div>
    </div>
  );
};

export default CartTotal;
