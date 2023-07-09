import React, { useEffect, useState } from "react";

import classes from "./style/SingleItem.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isInCart } from "../../helpers.js";
import { setAddProduct, setIncrease } from "../../redux/reducers/cartSlice.js";

const SingleItem = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((state) =>
    state.product.find((p) => Number(p.id) === Number(productId))
  );
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const { title, imageUrl, price, description } = products;
  const { cartItems } = cart;

  useEffect(() => {
    if (!products) {
      navigate("/shop");
    }
  }, [navigate]);

  const addItemHandler = () => {
    dispatch(setAddProduct(products));
  };
  const increaseItemHandler = () => {
    dispatch(setIncrease(products));
  };

  return (
    <div className={classes.container}>
      <div className={classes.image_container}>
        <img src={imageUrl} alt="product" />
      </div>
      <div className={classes.product_details}>
        <div className={classes.product_info}>
          <h3 className={classes.h3}>{title}</h3>
          <p className={classes.p}>$ {price}</p>
        </div>
        <div className={classes.btn_container}>
          {!isInCart(products, cartItems) ? (
            <button className={classes.btn_add} onClick={addItemHandler}>
              ADD TO CART
            </button>
          ) : (
            <button className={classes.btn_add} onClick={increaseItemHandler}>
              ADD MORE
            </button>
          )}

          <button className={classes.btn_checkout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className={classes.product_desc}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
