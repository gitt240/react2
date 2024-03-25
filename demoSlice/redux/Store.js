// ConfigStore cho redux
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import Reducer
import appReducer from "./Reducer";
import appReducer2 from "./Reducer2";

// Khai báo rootReducer
const rootReducer = combineReducers({
    app: appReducer,
    app2:appReducer2
})

// Khai báo store
const store = configureStore({
    reducer: rootReducer
})

export default store