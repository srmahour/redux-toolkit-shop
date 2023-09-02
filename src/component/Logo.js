import React from "react";
import { Link } from "react-router-dom";

export default function Logo(){
    return(
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <a className="text-md font-bold inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
                <Link to={`/`}>
                    Fake-Product
                </Link>
            </a>
            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
        </div>
    )
}