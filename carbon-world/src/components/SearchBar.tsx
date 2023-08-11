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
    <div className="mx-auto max-w-md">
      <div className="relative text-gray-800">
        <button type="submit" className="absolute left-0 top-0 ml-6 mt-3">
          <RiSearchFill className="h-5 w-5 fill-white" />
        </button>
        <input
          type="search"
          name="search"
          placeholder={placeholderDetails}
          className={`m-auto h-10 items-center rounded-full border border-white bg-inherit pl-[3.5rem] pr-10 font-Poppins text-sm text-white w-[${width}]`}
        />
      </div>
    </div>
  );
};

export default SearchBar;
