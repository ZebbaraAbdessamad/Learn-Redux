import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cartSlice'
import modalReducer from "../features/modalSlice";
//import { composeWithDevTools } from "redux-devtools-extension";
//, composeWithDevTools()
export const store = configureStore({
 reducer : {
    cart:cartReducer,
    modal:modalReducer,

 },
});

