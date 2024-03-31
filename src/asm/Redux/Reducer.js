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
            const index = state.cart.findIndex(item => item._id.toString() == action.payload._id.toString())
            if (index >= 0) {
                state.cart[index].quantity += action.payload.quantity
            } else {
                state.cart = [...state.cart, action.payload]
            }
        },
        logout: (state, action) => {
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(login.rejected, (state, action) => {
            console.log('...rejected....');
        })
    }
});

export const { addItemToCart, logout } = appSlice.actions;
export default appSlice.reducer;