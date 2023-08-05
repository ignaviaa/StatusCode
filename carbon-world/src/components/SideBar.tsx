import React from 'react';
import Profile from "@/components/Profile";
import NavItems from "@/components/NavItems";


function SideBar() {
    return (
        <div className="flex  flex-col h-screen w-[18.5%] bg-[#202020] ">
            <div className="text-center py-[58px] px-[96px]">
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