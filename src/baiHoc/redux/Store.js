// ConfigStore cho redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import Reducer
import { counterReducer } from "./Reducer";
import { numbersReducer } from "./Reducer2";

// Khai báo rootReducer
const rootReducer = combineReducers({
    counter:counterReducer,
    number:numbersReducer
})

// Khai báo store
const store=configureStore({
    reducer:rootReducer
})

export default store