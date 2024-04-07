import { createSlice } from "@reduxjs/toolkit"
import { updateOrder } from "../API/OrderAPI"

const UpdateOrderSlice = createSlice({
    name:'updateOrder',
    initialState:{
        data:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(updateOrder.pending, (state,action)=>{
            console.log('loading');
        })
        builder.addCase(updateOrder.fulfilled, (state,action)=>{
            console.log('Success');
            state.data = action.payload
        })
        builder.addCase(updateOrder.rejected, (state,action)=>{
            console.log('Rejected');
        })
    }
})

export default UpdateOrderSlice.reducer