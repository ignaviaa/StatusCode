import React from "react";

import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import MiniCards from "@/components/MiniCards";
import Cards from "@/components/Cards";
import { investorDashboard } from "@/constants/dashboard";

function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#171819] md:flex-row">
        <div className="md:w-[20%]">
          <SideBar data={investorDashboard} />
        </div>
        <div className="flex h-screen w-screen flex-col">
          <div className="mx-5 flex items-center justify-between p-10 py-8">
            <span className="font-Poppins text-[25px] font-semibold text-white">
              Dashboard
            </span>
            <div className="flex items-center bg-[#171819]">
              <SearchBar placeholderDetails="Search here" width="20vw" />
            </div>
          </div>
          <div className="flex flex-row md:flex-col">
            {/* Upper */}
            <div className="mx-5 grid grid-cols-1 gap-4 p-10 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
              {/* MiniCards components */}
              <div>
                <MiniCards />
              </div>
            </div>
            {/* Lower grid */}
            <div className="mx-5 flex-1 p-10 md:flex md:flex-col">
              <div className="mb-4 font-Poppins text-[20px] font-semibold text-white">
                Projects
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
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
