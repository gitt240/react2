import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "./LoginSlice";
import registerReducer from "./reducers/RegisterSlice"
import addOrderReducer from './reducers/AddToOrderSlice'
import getOrderReducer from './reducers/GetOrderSlice'
import updateOrderReducer from './reducers/UpdateOrderSlice'
import deleteOrderReducer from './reducers/DeleteOrderSlice'
import deleteAllOrderReducer from './reducers/DeleteAllOrderSlice'
import addCartReducer from './reducers/AddToCartSlice'
import getCartReducer from './reducers/GetCartSlice'
import getProductReducer from './reducers/GetProductSlice'
import getProductDetailReducer from './reducers/GetProductDetailSlice'
import getProductByIdReducer from './reducers/GetProductByIdSlice'
import searchProductlReducer from './reducers/SearchProductSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    login: appReducer,
    register: registerReducer,
    addOrder: addOrderReducer,
    getOrder: getOrderReducer,
    updateOrder: updateOrderReducer,
    deleteOrder: deleteOrderReducer,
    deleteAllOrder: deleteAllOrderReducer,
    addCart: addCartReducer,
    getCart: getCartReducer,
    getProduct: getProductReducer,
    getProductDetail: getProductDetailReducer,
    getProductById: getProductByIdReducer,
    searchProduct: searchProductlReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);


