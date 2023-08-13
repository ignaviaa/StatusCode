"use client";
import { useDataStore } from "@/utils/dataStore";
import React from "react";

function Profile() {
  const ngoName = useDataStore((state) => state.ngoName);
  return (
    <div className="flex flex-col  items-center gap-4 font-Poppins">
      <div className="h-[100px] w-[100px] rounded-full  bg-white"></div>
      <div>hi</div>
      <button
        className=" w-[90px] rounded-[10vh] border border-white p-2 text-[#D9D9D9] hover:border-transparent hover:bg-[#5CC94D] hover:text-black focus:outline-none  "
        onClick={() => console.log(ngoName)}
      >
        Edit
      </button>
    </div>
  );
}

export default Profile;
