import React from "react";
import SearchBar from "@/components/SearchBar";

function DashBoardNav() {
  return (
    <div className="px-[72px] py-[58px]">
      <div className="flex justify-between bg-[#202020]">
        <div>Dashboard</div>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default DashBoardNav;
