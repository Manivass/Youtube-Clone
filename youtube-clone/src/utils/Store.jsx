import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice  from "./searchSlice"
const Store = configureStore({
  reducer: {
    Nav: navSlice,
    search : searchSlice,
  },
});

export default Store;
