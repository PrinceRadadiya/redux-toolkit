import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : [],
    reducers: {
        adduser(state,action){
            state.push(action.payload);
        },
        removeuser(state,action){
            state.splice(action.payload,1)
        },
        clearall(state,action){
            return []
        },
    },
})


export default userSlice.reducer 
export const {adduser,removeuser,clearall} = userSlice.actions;