import { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { clearCart } from "../contexts_store/reducer/cart";


export const usePlaceOrder = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(null);
    const dispatch = useDispatch();

    const placeOrder = async (body) => {
        setIsLoading(true);
        setError(null);
        await axios.post('http://localhost:8888/api/cart/order', body)
            .then((res) => {
                setIsLoading(false);
                console.log(res.data);
                setSuccess(true);
                dispatch(clearCart());
            })
            .catch((error) => {
                setIsLoading(false);
                //console.log(error);
                setError(error.response.data);
            });

        setIsLoading(false);
    }
    return { placeOrder, isLoading, error, success };
};