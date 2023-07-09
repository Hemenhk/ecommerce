import React from "react";
import StripeCheckout from "./stripe-checkout/StripeCheckout.js";

import classes from "./style/Checkout.module.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { itemCount, total } = cart;
  return (
    <div className={classes.container}>
      <div>
        <h2>Checkout Summary</h2>
        <h3>{`Total Items: ${itemCount}`}</h3>
        <h3>{`Amount to Pay: $${total}`}</h3>
      </div>
      <div>
        <StripeCheckout />
      </div>
    </div>
  );
};

export default Checkout;
