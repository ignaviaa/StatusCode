import React from 'react';
import Profile from "@/components/Profile";
import NavItems from "@/components/NavItems";


function SideBar() {
    return (
        <div className=" fixed flex  flex-col h-full bg-[#202123] ">
            <div className=" py-[50px] px-[85px] font-Poppins">
                CarbonCoin
            </div>

            <div className="">

                <Profile/>
                <NavItems/>
            </div>

        </div>
    );
}

export default SideBar;