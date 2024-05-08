import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        value: []
    },
    reducers: {
        appendCart: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        clearCart: (state, action)=>{
            state.value = []
        }
    }
})

export const {appendCart, clearCart} = cartSlice.actions;
export const getCartCount = (state)=>state.cart.value.length;
export const getCart = (state)=>state.cart.value;
export const getCartTotal = (state)=> state.cart.value.reduce((acc, curr)=> acc+curr.price, 0);
export default cartSlice.reducer;