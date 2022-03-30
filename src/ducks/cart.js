import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    items: []
}
const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let product = state.items.find((el) => el.id === action.payload.id )
            product
                ? product.amount += 1
                : state.items.push({
                    id: action.payload.id,
                    amount: 1,
                })
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(el => el.id !== action.payload.id)
        },
        reset: (state, action) => {
            state.items = action.payload.items
        },
        increment: (state, action) => {
            let product = state.items.find((el) => el.id === action.payload.id )
            if( product.amount < 100 )
                product.amount += 1
        },
        decrement: (state, action) => {
            let product = state.items.find((el) => el.id === action.payload.id )
            if( product.amount > 1)
                product.amount -= 1
        }
    }
})

const { reducer, actions } = slice
export default reducer;
export const { addToCart, reset, increment, decrement, removeFromCart } = actions