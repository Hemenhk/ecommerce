import {  configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./reducers/singleProductSlice.js";
import cartSlice from "./reducers/cartSlice.js";

const store = configureStore({
  reducer: {
    product: ProductsSlice.reducer,
    cart: cartSlice.reducer
  },
});

export default store;
