import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name : "app",
    initialState : {
        hambersand : true ,
    },
    reducers : {
        isNav : (state) => {
            state.hambersand = !state.hambersand ;
        }
    }
})
export default navSlice.reducer;
export const {isNav} = navSlice.actions ;