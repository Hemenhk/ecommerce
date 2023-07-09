import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./style/SuccessCanceled.module.css"

const Canceled = () => {
  const navigate = useNavigate();

  const shopNavHandler = () => {
    navigate("/shop");
  };
  return (
    <div className={classes.container}>
      <h1>Payment failed</h1>
      <p>Payment was not successful</p>
      <div className={classes.btn_container}>
        <button className={classes.btn} onClick={shopNavHandler}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Canceled;
