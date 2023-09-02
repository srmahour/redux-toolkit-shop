import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";



export default function Button({product, label}){
    
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    return(
        <button onClick={() => { handleAdd(product) }} className="bg-teal-500 text-white active:bg-teal-600 uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  max-w-full" type="button">{label}</button>
    )
}