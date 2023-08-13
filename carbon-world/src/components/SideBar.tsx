import React from "react";
import Profile from "@/components/Profile";
import NavItems from "@/components/NavItems";

function SideBar({ data }) {
  return (
    <div className=" fixed flex  h-full flex-col bg-[#202123] ">
      <div className=" px-[85px] py-[50px] font-Poppins">CarbonCoin</div>

      <div className="">
        <Profile />
        <NavItems data={data} />
      </div>
    </div>
  );
}

export default SideBar;
