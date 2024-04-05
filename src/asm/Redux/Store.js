import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "./Reducer";
import registerReducer from "./reducers/RegisterSlice"

const rootReducer = combineReducers({
    app: appReducer,
    register: registerReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;


