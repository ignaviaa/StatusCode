import React from "react";
import Profile from "@/components/Profile";
import NavItems from "@/components/NavItems";

function SideBar({ data }) {
  return (
    <div className=" fixed flex  flex-col h-full bg-[#202123] ">
      <div className=" py-[50px] px-[85px] font-Poppins">CarbonCoin</div>

      <div className="">
        <Profile />
        <NavItems data={data} />
      </div>
    </div>
  );
}

export default SideBar;
