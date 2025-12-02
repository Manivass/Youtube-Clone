import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    saveCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { saveCache } = searchSlice.actions;
export default searchSlice.reducer;
