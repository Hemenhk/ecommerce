import {  configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./reducers/singleProductSlice.js";

const store = configureStore({
  reducer: {
    product: ProductsSlice.reducer,
  },
});

export default store;
