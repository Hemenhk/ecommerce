import React from "react";
import { useSelector } from "react-redux";
import CartItems from "./CartItems.js";

import classes from "./style/CartPage.module.css";
import CartTotal from "./CartTotal.js";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  const { cartItems, itemCount, total } = cart;
  return (
    <>
      <h1 className={classes.h1}>Cart</h1>
      {cartItems.length === 0 ? (
        <div className={classes.cart_empty}>Your cart is empty</div>
      ) : (
        <>
          <div className={classes.cart_page}>
            <div className={classes.cart_items_container}>
              {cartItems.map((item) => (
                <CartItems {...item} quantity={item.quantity} key={item.id} />
              ))}
            </div>
            <CartTotal itemCount={itemCount} total={total} />
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;
