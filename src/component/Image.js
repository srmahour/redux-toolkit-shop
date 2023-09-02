import React from "react";

export default function Image({src, object, aspect}){
    return(
        <img src={src} alt="..." className={`shadow rounded align-middle w-full border-none ${object} ${aspect}`} />
    )
}