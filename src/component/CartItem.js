import React from "react";
import Image from "./Image";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";


export default function CartItem(){

    const cartItems = useSelector(store => store.cart);
    const dispatch = useDispatch();

    const removeHandle = (item) => {
        dispatch(remove(item))
    }

    return(
        <>
            {cartItems.map((item) => (
                <li className="flex items-center justify-between mb-4" key={item.id}>
                <div className="flex items-center w-60">
                    <div className=" w-2/6"><Image src={item.image} aspect="aspect-square" object="object-cover"/></div>
                    <h4 className="text-sm w-4/6 font-semibold pl-3">{item.title}</h4>
                </div>
                <div className="flex items-center">
                    <button type="button" className="w-6 h-6 bg-teal-500 text-white">-</button>
                    <span className="text-sm mx-2">1</span>
                    <button type="button" className="w-6 h-6 bg-teal-500 text-white">+</button>
                </div>
                <p className="text-base text-center font-semibold">${item.price}</p>
                <button type="button" onClick={()=>{removeHandle(item)}} className="w-20 h-8 bg-red-800 text-white text-sm">Delete</button>
            </li>
            ))}
        </>
    )
}