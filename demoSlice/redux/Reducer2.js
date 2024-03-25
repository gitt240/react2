import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const AppSlice2 = createSlice({
    name:'app',
    initialState:{
        count:20
    },
    reducers:{
        giam:(state,action)=>{
            state.count-=1
        },
    },
    extraReducers:(builder)=>{

    }
})
export const {giam}=AppSlice2.actions
export default AppSlice2.reducer