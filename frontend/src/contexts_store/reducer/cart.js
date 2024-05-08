import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        value: []
    },
    reducers: {
        appendCart: (state, action) => {
            state.value = [...state.value, action.payload];
        }
    }
})

export const {appendCart} = cartSlice.actions;
export const getCart = (state)=>state.cart.value;
export default cartSlice.reducer;