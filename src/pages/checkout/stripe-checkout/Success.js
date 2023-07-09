import React, { useEffect } from "react";
import { setClearCart } from "../../../redux/reducers/cartSlice.js";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./style/SuccessCanceled.module.css"

const Success = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length !== 0) {
      dispatch(setClearCart());
    }
  }, [cartItems, dispatch]);

  const shopNavHandler = () => {
    navigate("/shop");
  };

  return (
    <div className={classes.container}>
      <h1>Thank you for your order!</h1>
      <p>
        We are currently processing your order and will send you a confirmation
        email shortly.
      </p>
      <div className={classes.btn_container}>
        <button className={classes.btn} onClick={shopNavHandler}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
