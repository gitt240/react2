import { createSlice } from "@reduxjs/toolkit";
import { login } from "./UserAPI";

const initialState = {
    user: null,
    cart: [],
    products: [],
};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            state.cart=[...state.cart, action.payload]
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled,(state, action)=>{
            state.user = action.payload
        })
        builder.addCase(login.rejected,(state, action)=>{
            console.log('...rejected....');
        })
    }
});

export const { addItemToCart } = appSlice.actions;
export default appSlice.reducer;