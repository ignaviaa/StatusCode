"use client";
import React from "react";
import { RiSearchFill } from "react-icons/ri";

const SearchBar = ({
  placeholderDetails,
  width,
}: {
  placeholderDetails: string;
  width: string;
}) => {
  return (
    <div className="max-w-md mx-auto">
      <div className="relative text-gray-800">
        <button type="submit" className="absolute left-0 top-0 mt-3 ml-6">
          <RiSearchFill className="h-5 w-5 fill-white" />
        </button>
        <input
          type="search"
          name="search"
          placeholder={placeholderDetails}
          className={`h-10 pl-[3.5rem] text-white pr-10 items-center rounded-full text-sm font-Poppins bg-inherit m-auto border border-white w-[${width}]`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
