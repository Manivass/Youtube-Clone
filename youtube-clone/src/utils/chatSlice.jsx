import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : "chat" ,
    initialState : {
        message : [],
    },
    reducers : {
        addChatList : (state,action) => {
            state.message.splice(50,5)
            state.message.unshift(action.payload);
        }
    }
})


export const {addChatList} = chatSlice.actions ; 
export default chatSlice.reducer ;