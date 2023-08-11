import React from "react";

function Transaction() {
  return (
    <>
      <div className="w-[75vw] rounded-[1rem] bg-[#202123] px-5 py-4 shadow-lg">
        <div className="mb-2 text-lg text-white">Received from Abc</div>
        <p className="text-[12px] text-base text-[#7b7b7b]">
          Today at 2:00 PM.
        </p>
      </div>
    </>
  );
}

export default Transaction;
