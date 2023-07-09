import React from "react";
import {
  PlusCircleIcon,
  TrashIcon,
  MinusCircleIcon,
} from "../../components/icons/index.js";

import classes from "./style/CartPage.module.css";
import { useDispatch } from "react-redux";
import { setDecrease, setIncrease, setRemove } from "../../redux/reducers/cartSlice.js";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const { title, price, imageUrl, quantity, id, description } = props;

  const increaseHandler = () => {
    dispatch(
      setIncrease({ title, price, imageUrl, quantity, id, description })
    );
  };

  const decreaseHandler = () => {
    dispatch(setDecrease(id));
  };

  const removeHandler = () => {
    dispatch(setRemove(id))
  }

  return (
    <div className={classes.container}>
      <div className={classes.image_container}>
        <img src={imageUrl} alt="product" />
      </div>
      <div className={classes.info}>
        <h4>{title}</h4>
        <p>$ {price}</p>
      </div>
      <div className={classes.quantity}>
        <p>{`Quantity: ${quantity}`}</p>
      </div>
      <div className={classes.btn_container}>
        <button className={classes.btn_increase} onClick={increaseHandler}>
          <PlusCircleIcon width="20" />
        </button>

        {quantity > 0 && (
          <>
            <button className={classes.btn_decrease} onClick={decreaseHandler}>
              <MinusCircleIcon width="20" />
            </button>
            <button className={classes.btn_trash} onClick={removeHandler}>
              <TrashIcon width="20" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItems;
