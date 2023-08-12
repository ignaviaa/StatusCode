import React from "react";
import Image from 'next/image';

import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";

import { investorDashboard } from "@/constants/dashboard";

function Page() {
    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row bg-[#171819]">
                <div className="md:w-[20%]">
                    <SideBar data={investorDashboard} />
                </div>
                <div className="w-screen h-screen flex flex-col overflow-x-hidden">
                    <div className="flex items-center justify-between p-10 py-8 mx-5">
            <span className="text-white text-[25px] font-semibold font-Poppins">
              MarketPlace
            </span>
                        <div className="flex items-center bg-[#171819]">
                            <SearchBar />
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-col">
                        {/* Upper */}
                        <div className=' w-screen'>
                            <Image src="/biomass.png" width={500} height={500} alt="" className='w-screen h-[30vh] bg-cover'/>
                            <h1 className='relative ml-10 font-Poppins text-4xl mb-10 mt-10'>Project 1</h1>

                        </div>
                        {/* Lower grid */}
                        {/*<div className="md:flex md:flex-col flex-1 p-10 mx-5">*/}
                        {/*    <div className="mb-4 text-white text-[20px] font-semibold font-Poppins">*/}
                        {/*        Projects*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        <div className="grid grid-cols-1 gap-4 p-10 mx-5 flex-grow overflow-y-auto">
                            {/* Rounded container */}
                            <div className="h-[500px] w-full bg-[#2C2D2E] rounded-lg overflow-hidden">

                                <div className='m-8'>Description:</div>
                                <div className='m-8'>Project Lead:</div>
                                <div className='m-8'>Location:</div>
                                <div className='m-8'>Funding Raised:</div>
                                <div className='m-8'>Carbon Captured:</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
