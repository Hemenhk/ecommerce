import React from "react";
import { useSelector } from "react-redux";

import classes from "./styles/FeaturedProduct.module.css";

const FeaturedProduct = ({ productId }) => {
  const product = useSelector((state) =>
    state.product.find((product) => product.id === productId)
  );

  const { title, imageUrl, price } = product;

  return (
    <div className={classes.featured__container}>
      <div>
        <img src={imageUrl} alt="product" />
      </div>
      <div className={classes.featured__product}>
        <h3 className={classes.h3}>{title}</h3>
        <p className={classes.p}>$ {price}</p>
        <button className={classes.btn}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
