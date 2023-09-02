import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";


export default function Cart(){

    const item = useSelector((store) => store.cart);

    return(
        <>
            <span className=" bg-slate-800 text-white rounded-full px-2 py-1">
                Cart <span>{item.length}</span>
            </span>
        </>
    )
}