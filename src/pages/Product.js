import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../component/Image";
import Button from "../component/Button";
import { useSelector } from "react-redux";


export default function Product(){
    const navigate = useNavigate();
    const params = useParams();
    
    const { data, status } = useSelector((state) => state.product);
    const product = data[params.id - 1];

    if(status === 'idle'){
        return(
            <div className="container mx-auto py-10 ">
                <button type="button" className="bg-slate-600 text-white rounded-full px-4 py-1 mb-5" onClick={()=>{ navigate('/') }}>Back</button>
                <div className="flex items-center">
                    <div className="w-1/3">
                        <Image src={product.image}/>
                    </div>
                    <div className="px-10 w-2/3">
                        <h1 className="mb-2 font-bold text-xl">{product.title}</h1>
                        <h1 className="mb-2 font-bold text-xs text-neutral-500">{product.category}</h1>
                        <h4 className="mb-2 font-bold text-xl">₹ {product.price}</h4>
                        <p className="text-sm mb-2">{product.description}</p>
                        <Button product={product} label={'Add To Cart'}/>
                    </div>
                </div>
            </div>
        )
    } else if(status === 'error'){
        return <h1 className=" text-xl text-center p-7 bg-red-400 text-white">There are some error in product loading</h1>
    }    
    else{
        return <h1 className=" text-4xl text-center">Loading..</h1>
    }

    
}
