import { Link } from "react-router-dom";
import React from "react";
import Image from "./Image";
import Button from "./Button";


export default function SingleProduct({productDetail}){
    
    return(
        <div className="relative w-1/4 px-4 flex flex-col items-center bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none text-center my-2">
            <Link to={`/product/${productDetail.id}`}><Image src={productDetail.image} object="object-contain" aspect="aspect-square"/></Link>
            <h5 className="block antialiased tracking-normal font-sans text-md font-semibold leading-snug text-blue-gray-900 mt-6 mb-1">{productDetail.title}</h5>
            <h6 className="text-xs text-neutral-400">{productDetail.category}</h6>
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-500 mb-2">₹ {productDetail.price}</p>
            <Button product={productDetail} label={'Add To Cart'}/>
        </div>
    )
}