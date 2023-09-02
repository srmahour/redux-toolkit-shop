import React from "react";
import SingleProduct from "./SingleProduc";
import FetchApi from "../customHook/FetchApi";

export default function ProductList({title}){

    const [data, status] = FetchApi(`products`);
    
    if(status === 'idle'){
        console.log(data);
        return(
            <section>
                <h2 className=" text-center text-3xl mb-8 font-semibold">{title}</h2>
                <div className="container mx-auto flex flex-wrap">
                    { data.map((item, index)=>(
                        <SingleProduct productDetail={item} key={index}  />
                    ))
                    }
                </div>
            </section>
        )
    }
    else if(status === 'error'){
        return <h1 className=" text-xl text-center p-7 bg-red-400 text-white">There are some error in product loading</h1>
    }    
    else{
        return <h1 className=" text-4xl text-center">Loading..</h1>
    }

    
}