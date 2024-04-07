import { createSlice } from "@reduxjs/toolkit"
import { getProductById } from "../API/ProductAPI";

const GetProductByIdSlice = createSlice({
    name: 'getProductById',
    initialState: {
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(getProductById.pending, (state, action) => {
            console.log('loading');
        })
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('Success');
        })
        builder.addCase(getProductById.rejected, (state, action) => {
            console.log('Rejected');
        })
    }
})

export default GetProductByIdSlice.reducer