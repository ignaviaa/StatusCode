import React from "react";

const AddButton = () => {
  return (
    <button className="flex h-full w-full max-w-sm items-center justify-center overflow-hidden rounded-lg bg-[#5CC94D] text-black shadow-lg">
      <span className="flex h-10 w-10 items-center justify-center rounded border-2 border-white text-3xl text-white">
        +
      </span>
    </button>
  );
};

export default AddButton;
