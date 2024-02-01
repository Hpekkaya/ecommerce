// Redux store page

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice"

const rootReducer = combineReducers(){

}

const store = configureStore({
    reducer:rootReducer
})

export default store