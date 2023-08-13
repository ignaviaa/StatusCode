import React from "react";
import Image from "next/image";

import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";

import { investorDashboard } from "@/constants/dashboard";

function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#171819] md:flex-row">
        <div className="md:w-[20%]">
          <SideBar data={investorDashboard} />
        </div>
        <div className="flex h-screen w-screen flex-col overflow-x-hidden">
          <div className="mx-5 flex items-center justify-between p-10 py-8">
            <span className="font-Poppins text-[25px] font-semibold text-white">
              MarketPlace
            </span>
            <div className="flex items-center bg-[#171819]">
              <SearchBar placeholderDetails="type here" width="2vw" />
            </div>
          </div>
          <div className="flex flex-row md:flex-col">
            {/* Upper */}
            <div className=" w-screen">
              <Image
                src="/biomass.png"
                width={500}
                height={500}
                alt=""
                className="h-[30vh] w-screen bg-cover"
              />
              <h1 className="relative mb-10 ml-10 mt-10 font-Poppins text-4xl">
                Project 1
              </h1>
            </div>

            <div className="mx-5 grid flex-grow grid-cols-1 gap-4 overflow-y-auto p-10">
              <div className="h-[500px] w-full overflow-hidden rounded-lg bg-[#2C2D2E]">
                <div className="m-8">Description:</div>
                <div className="m-8">Project Lead:</div>
                <div className="m-8">Location:</div>
                <div className="m-8">Funding Raised:</div>
                <div className="m-8">Carbon Captured:</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
