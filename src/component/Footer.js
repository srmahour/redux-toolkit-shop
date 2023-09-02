import React from "react";

export default function Footer(){
    return(
        <footer className="w-full bottom-0 bg-blueGray-800 pb-6 mt-10">
            <div className="container mx-auto px-4">
                <hr className="mb-6 border-b-1 border-blueGray-600"/>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4">
                    <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                        Copyright © 2023 
                        <a href="https://www.creative-tim.com?ref=nr-footer-small" className="text-neutral-500 hover:text-blueGray-300 text-sm font-semibold py-1"> FSD</a>
                    </div>
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                        <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                            <li className=" text-neutral-500 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">
                                Creative Tim
                            </li>
                            <li className="text-neutral-500 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">
                                About Us
                            </li>
                            <li className="text-neutral-500 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">
                                Blog
                            </li>
                            <li className="text-neutral-500 hover:text-blueGray-300 text-sm font-semibold block py-1 px-3">
                                MIT License
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}