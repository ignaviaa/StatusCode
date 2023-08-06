import React from 'react';
import SearchBar from "@/components/SearchBar";

function DashBoardNav() {
    return (
        <div className="py-[58px] px-[72px]">
            <div className="flex justify-between ">
                <div>Dashboard</div>
                <div><SearchBar/></div>
            </div>
        </div>

    );
}

export default DashBoardNav;