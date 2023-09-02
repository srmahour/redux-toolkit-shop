import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function Layout({children}){
    return(
        <>
            <Header/>
                <main>
                    <div className="container mx-auto">
                        {children}            
                    </div>
                </main>
            <Footer/>
        </>
    )
}
