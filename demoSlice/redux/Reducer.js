import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: 'app',
    initialState: {
        count: 20,
        cart: [] //{id,name,price,quantity}
    },
    reducers: {
        tang: (state, action) => {
            state.count += 1
        },
        giam: (state, action) => {
            state.count -= 1
        },
        // thêm
        addItem: (state, action) => {
            const index = state.cart.findIndex((item) => item.id.toString() == action.payload.id.toString())
            if (index >= 0) {
                state.cart[index].quantity += action.payload.quantity
            } else {
                state.cart.push(action.payload)
            }
        },
        // Xoá
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id.toString() != action.payload.toString())
        },
        // sửa
        updateItem: (state, action) => {
            const index = state.cart.findIndex((item) => item.id.toString() == action.payload.id.toString())
            state.cart[index].quantity += action.payload.quantity
            // Nếu giảm về 0 xoá khỏi giỏ hàng
            if (state.cart[index].quantity <= 0) {
                state.cart = state.cart.filter((item) => item.id.toString() != action.payload.id.toString())
            }
        }
    },
    extraReducers: (builder) => {

    }
})
export const { tang, giam, addItem, removeItem, updateItem } = AppSlice.actions
export default AppSlice.reducer