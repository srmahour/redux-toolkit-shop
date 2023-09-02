import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <nav className="flex lg:flex-grow items-center" id="example-navbar-info">
            <ul className="flex flex-col lg:flex-row list-none ml-auto items-center">
                <li className="px-3 py-2 flex items-center text-sm leading-snug text-white hover:opacity-75">
                    <Link to={`/`}>Home</Link>
                </li>
                <li className="px-3 py-2 flex items-center text-sm leading-snug text-white hover:opacity-75">
                    <Link to={`/products`}>Products</Link>
                </li>
                <li className="px-3 py-2 flex items-center text-sm leading-snug text-white hover:opacity-75">
                    <Link to={`/cart`}><Cart/></Link>
                </li>
            </ul>
        </nav>
    )
}