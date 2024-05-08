import { useState} from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { assignProducts } from "../contexts_store/reducer/products";


export const useFetchProducts = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const dispatch = useDispatch();

    const fetchProducts = async ()=>{
        setIsLoading(true);
        setError(null);
        await axios.get('http://localhost:8888/api/product/fetch')
        .then((res)=>{
            setIsLoading(false);
            dispatch(assignProducts(res.data));
        })
        .catch((error)=>{
            setIsLoading(false);
            setError(error.response.data);
        });

        setIsLoading(false);
    }
    return {fetchProducts, isLoading, error};
};