import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isInCart } from "../../helpers.js";
import { setAddProduct, setIncrease } from "../../redux/reducers/cartSlice.js";

import classes from "./styles/FeaturedProduct.module.css";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.find((product) => product.id === productId)
  );
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const { title, imageUrl, price, description, id } = product;
  const { cartItems } = cart;

  const addProductHandler = () => {
    dispatch(setAddProduct(product));
  };

  const increaseItemHandler = () => {
    dispatch(setIncrease(product));
  };

  const itemNavHandler = () => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={classes.featured__container}>
      <div onClick={itemNavHandler} className={classes.featured_cursor}>
        <img src={imageUrl} alt="product" />
      </div>
      <div className={classes.featured__product}>
        <h3 className={classes.h3}>{title}</h3>
        <p className={classes.p}>$ {price}</p>
        {!isInCart(product, cartItems) ? (
          <button className={classes.btn} onClick={addProductHandler}>
            ADD TO CART
          </button>
        ) : (
          <button className={classes.btn} onClick={increaseItemHandler}>
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
