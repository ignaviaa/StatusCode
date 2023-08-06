import React from 'react';
import Profile from "@/components/Profile";
import NavItems from "@/components/NavItems";


function SideBar() {
    return (
        <div className="flex  flex-col h-screen  bg-[#0b090a] ">
            <div className=" py-[58px] px-[96px]">
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