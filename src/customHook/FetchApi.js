import {useEffect} from "react";
import { fetchProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FetchApi(endpoint){

    const dispatch = useDispatch();
    const {data, status} = useSelector((state) => state.product);
    
    useEffect(()=>{
        
        dispatch(fetchProducts(endpoint));

    }, [endpoint, dispatch])

    return [data, status];

}