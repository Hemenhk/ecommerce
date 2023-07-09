import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { fetchFromApi } from "../../../helpers.js";

import classes from "./style/StripeCheckout.module.css"

const StripeCheckout = () => {
  const [email, setEmail] = useState("");
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const stripe = useStripe();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: item.price * 100,
          product_data: {
            name: item.title,
            description: item.description,
            images: [item.imageUrl],
          },
        },
      };
    });
    const response = await fetchFromApi("create-checkout-session", {
      body: { line_items, customer_email: email },
    });
    const { sessionId } = response;
    const { error } = await stripe.redirectToCheckout({ sessionId });
    

    if (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className={classes.form_container}>
      <div className={classes.container}>
        <input
          type="email"
          onChange={emailChangeHandler}
          value={email}
          placeholder="Enter your email address"
          className={classes.email_input}
        />
      </div>
      <div className={classes.btn_container}>
        <button type="submit" className={classes.btn}>
          Checkout
        </button>
      </div>
    </form>
  );
};

export default StripeCheckout;
