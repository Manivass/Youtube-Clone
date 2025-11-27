import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
const Store = configureStore({
  reducer: {
    Nav: navSlice,
  },
});

export default Store;
