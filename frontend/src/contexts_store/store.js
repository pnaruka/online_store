import {configureStore} from "@reduxjs/toolkit";
import productsReducer from './reducer/products';
import cartReducer from './reducer/cart';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

export default store;