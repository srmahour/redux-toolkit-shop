import React from "react";
import CartItem from "../component/CartItem";
import Button from "../component/Button";

export default function CartPage(){
    return(
        <>
            <div className="container mx-auto lg:w-1/2 py-20">
            
            <h1 className=" text-3xl font-bold mb-14">Cart Items</h1>
            <ul>
                <CartItem key="1" mealId="3" />
            </ul>
            <hr className="w-full h-[1px] bg-gray-400 my-8" />
            <div className=" text-right">
                <p className=" text-lg font-bold mb-3">$3656</p>
                <Button label="Order Now"/>
            </div>
        </div>
        </>
    )
}