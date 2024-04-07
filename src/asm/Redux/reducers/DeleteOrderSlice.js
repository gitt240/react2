import { createSlice } from "@reduxjs/toolkit"
import { deleteOrder } from "../API/OrderAPI"

const DeleteOrderSlice = createSlice({
    name:'deleteOrder',
    initialState:{
        data:{}
    },
    extraReducers:(builder)=>{
        builder.addCase(deleteOrder.pending, (state,action)=>{
            console.log('loading');
        })
        builder.addCase(deleteOrder.fulfilled, (state,action)=>{
            state.data =action.payload
            console.log('Success');
        })
        builder.addCase(deleteOrder.rejected, (state,action)=>{
            console.log('Reject');
        })
    }
})

export default DeleteOrderSlice.reducer