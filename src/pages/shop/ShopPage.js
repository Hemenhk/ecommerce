import React from "react";
import { useSelector } from "react-redux";
import FeaturedProduct from "../../components/share/FeaturedProduct.js";

import classes from "./style/ShopPage.module.css";

const ShopPage = ({}) => {
  const products = useSelector((state) => state.product);

  const allProducts = products.map((product) => (
      <FeaturedProduct productId={product.id} key={product.id} />
  ));
  return (
    <div className={classes.shop_container}>
      <h2 className={classes.h2}>Shop</h2>
      <div className={classes.shop_products}>{allProducts}</div>
    </div>
  );
};

export default ShopPage;
