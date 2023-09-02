import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header(){
    return(
        <header className="flex flex-wrap py-2">
            <div className="w-full px-4">
                <div className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-teal-500 rounded">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <Logo/>
                        <Navigation/>
                    </div>
                </div>
            </div>
        </header>
    )
}