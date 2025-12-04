import { createSlice } from "@reduxjs/toolkit";


const navSlice = createSlice({
    name : "app",
    initialState : {
        hambersand : true ,
        description : true 
    },
    reducers : {
        isNav : (state) => {
            state.hambersand = !state.hambersand ;
        },
        Watch : (state) => {
            state.hambersand = false 
        },
        toggleNav : (state) => {
            state.description = !state.description ;
        },
        Search : (state) => {
            state.hambersand = true ;
        }
        

    }
})
export default navSlice.reducer;
export const {isNav ,Watch , toggleNav ,Search  } = navSlice.actions ;