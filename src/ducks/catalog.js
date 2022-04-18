import { createSlice } from "@reduxjs/toolkit";
import { loadProducts } from "../api/catalogAPI";

export const slice = createSlice({
    name: 'catalog',
    initialState: {
        status: 'initial',
        data: [],
        error: null,
    },
    reducers: {
      startProductsLoading: (state) => {
          state.status = 'loading'
      },
      endProductsLoading: (state, action) => {
        const { data, error } = action.payload
          state.status = error ? 'error' : 'success';
          state.error = error;
          state.data = data;
      },
    }
})

const { reducer, actions } = slice
export default reducer
export const { startProductsLoading, endProductsLoading } = actions

export async function loadProductsList(dispatch) {
     dispatch(startProductsLoading())
    try {
        const productList = await loadProducts()
        const { data } = productList
        dispatch(endProductsLoading({
            data,
            error: null
        }))
    } catch (e) {
        dispatch(endProductsLoading({
            data: [],
            error: e.message,
        }))
    }
}