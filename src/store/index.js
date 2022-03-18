import { configureStore } from "@reduxjs/toolkit";
import queryReducer  from "./slices/searchValueSlice";
import arrayReducer  from './slices/nameArraySlice';
import { combineReducers } from 'redux';





export const store = configureStore({
    reducer: {
        query: queryReducer,
        array: arrayReducer, 
    },
})

const reducers = combineReducers({
    query: queryReducer,
    array: arrayReducer,
});
