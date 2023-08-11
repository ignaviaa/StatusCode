import React from "react";
import Image from "next/image";

function Cards() {
  return (
    <>
      <div className="max-w-sm overflow-hidden rounded-lg bg-[#202123] shadow-lg">
        <div className="relative h-0 w-full" style={{ paddingBottom: "42%" }}>
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src="https://via.placeholder.com/400x300" // Replace with your image URL
            alt="Card Image"
            width={400}
            height={300}
          />
        </div>
        <div className="px-5 py-4">
          <div className="mb-2 text-xl font-bold text-white">
            The Coldest Sunset
          </div>
          <p className="text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
