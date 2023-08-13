import React from "react";
import GlobalNav from "@/components/GlobalNav";
import SearchBar from "@/components/SearchBar";
import GlobalCards from "@/components/GlobalCard";

function page() {
  return (
    <>
      <div className="h-screen w-screen bg-[#171819] ">
        <div className="flex flex-row items-center bg-[#202023] ">
          <GlobalNav />
          <div className="pl-[33%]">
            <SearchBar placeholderDetails="Search for projects" width="30px" />
          </div>
        </div>
        <p className=" ml-10 mt-10 font-Poppins text-2xl">Marketplace</p>
        <div className="m-10 grid grid-cols-3 gap-5 ">
          <div>
            <GlobalCards />
          </div>
          <div>
            <GlobalCards />
          </div>
          <div>
            <GlobalCards />
          </div>
        </div>
      </div>
    </>
  );
}
export default page;
