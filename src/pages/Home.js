import React from "react";
import ProductList from "../component/ProductsList";
import Hero from "../component/Hero";


export default function Home(){
    return(
        <>  
            <Hero/>
            <ProductList title="Latest Products"/>
        </>
    )
}