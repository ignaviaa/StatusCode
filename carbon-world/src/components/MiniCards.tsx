import React from "react";

function MiniCards() {
  return (
    <>
      <div
        className="max-w-xs overflow-hidden rounded-lg bg-[#202123] shadow-lg"
        style={{ width: "250px", height: "150px" }}
      >
        <div className="px-5 py-4">
          <div className="mb-2 text-xl font-bold text-white">
            The Coldest Sunset
          </div>
          <p className="text-base text-white"></p>
        </div>
      </div>
    </>
  );
}

export default MiniCards;
