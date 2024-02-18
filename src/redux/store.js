// Redux store page

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice"
import productReducer from "./slice/productSlice"
import filterReducer from "./slice/filterSlice"

const rootReducer = combineReducers({
    auth:authReducer,
    // products store here
    product :productReducer,
    filter : filterReducer

})

// Excludes the serializable state check middleware
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})

export default store