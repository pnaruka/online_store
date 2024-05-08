import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name:'products',
    initialState:{
        value: []
    },
    reducers: {
        assignProducts: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {assignProducts} = productSlice.actions;
export const getProducts = (state)=>state.products.value;
export default productSlice.reducer;