import React from "react";
import Image from "./Image";
import heroimage from '../assets/images/heroimage.jpg'

export default function Hero(){
    return(
        <div className="relative flex aspect-[16/5] content-center items-center justify-center pt-10 pb-20 mb-10 overflow-hidden rounded-md">
            <div className="absolute top-0 h-full w-full bg-cover bg-center overflow-hidden">
                <Image src={heroimage} object="object-cover" aspect="aspect-[16/5]"/>
            </div>
            <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center"></div>
            <div className="max-w-8xl container relative mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                        <h1 className="block antialiased tracking-normal font-sans text-5xl leading-tight text-white mb-6 font-black">Your story starts with us.</h1>
                        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white opacity-80">This is a simple example of a Landing Page you can build using Material Tailwind. It features multiple components based on the Tailwind CSS and Material Design by Google.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}