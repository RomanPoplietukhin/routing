import { configureStore } from "@reduxjs/toolkit";
import catalog from "../ducks/catalog";
import cart from '../ducks/cart'
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        catalog,
        cart,
    },
    devTools: true,
    middleware: [
        thunk,
    ]
})