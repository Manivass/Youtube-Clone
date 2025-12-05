import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import searchSlice  from "./searchSlice"
import chatSlice from "./chatSlice";
const Store = configureStore({
  reducer: {
    Nav: navSlice,
    search : searchSlice,
    chat : chatSlice,
  },
});

export default Store;
