"use client"
import React,{useRef} from "react";
import Navbar from "@/components/Navbar";
import About from "./about";
import Image from "next/image";
import about from "./about";
import Timeline from "./timeline";
import Features from "./features";



const Page = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat backdrop-brightness-120"
        style={{ backgroundImage: `url(./cover.jpeg)` }}
      >
        <Navbar />
        
    
    <div className="flex justify-center mx-auto mb-10 text-5xl mt-[20%] text-center  ">
         Introducing<br/> The CarbonCoin
    </div> 
  
        
        </div>
        <About />
        <Features />
        <div className="bg-[#051129] font-Poppins pt-[20vh]">
        <Timeline />
        </div>


    </>
  );
}

export default Page;
