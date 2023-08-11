import React from "react";

import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import MiniCards from "@/components/MiniCards";
import Cards from "@/components/Cards";
import { investorDashboard } from "@/constants/dashboard";

function Page() {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row bg-[#171819]">
        <div className="md:w-[20%]">
          <SideBar data={investorDashboard} />
        </div>
        <div className="w-screen h-screen flex flex-col">
          <div className="flex items-center justify-between p-10 py-8 mx-5">
            <span className="text-white text-[25px] font-semibold font-Poppins">
              Dashboard
            </span>
            <div className="flex items-center bg-[#171819]">
              <SearchBar />
            </div>
          </div>
          <div className="flex flex-row md:flex-col">
            {/* Upper */}
            <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-10 mx-5">
              {/* MiniCards components */}
              <div>
                <MiniCards />
              </div>
            </div>
            {/* Lower grid */}
            <div className="md:flex md:flex-col flex-1 p-10 mx-5">
              <div className="mb-4 text-white text-[20px] font-semibold font-Poppins">
                Projects
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
                <div>
                  <Cards />
                </div>
                <div>
                  <Cards />
                </div>
                <div>
                  <Cards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
