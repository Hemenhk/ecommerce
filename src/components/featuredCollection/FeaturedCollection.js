import React from "react";

import classes from "./styles/FeaturedCollection.module.css";
import { useSelector } from "react-redux";
import FeaturedProduct from "../share/FeaturedProduct.js";

const FeaturedCollection = () => {
  const products = useSelector((state) => state.product);

  const productItems = products
    .filter((product, idx) => idx < 4)
    .map((product) => (
      <FeaturedProduct productId={product.id} {...product} key={product.id} />
    ));

  return (
    <div className={classes.collection__container}>
      <h2 className={classes.h2}>Featured Collection</h2>
      <div className={classes.collection}>{productItems}</div>
    </div>
  );
};

export default FeaturedCollection;
