import React from "react";
import Image from "next/image";

function Category() {
  return (
    <>
      <div className="relative h-[40vh] w-[28vw] overflow-hidden rounded-[0.5rem] bg-[#202123] shadow-lg ">
        <div className="px-5 py-4">
          <span className="mb-2 font-Poppins text-xl font-bold text-white ">
            Category
          </span>
          <div className="grid grid-cols-4">
            <div className="rounded">
              <Image src="/forest.jpeg" height={90} width={90} alt="forest" />
              <p className="relative bottom-[50%] text-center font-Poppins">
                Forest
              </p>
            </div>

            <div>
              <Image src="/water.jpeg" height={90} width={90} alt="water" />
              <p className="relative bottom-[50%] text-center font-Poppins">
                Water
              </p>
            </div>
            <div>
              <Image src="/wind.jpeg" height={90} width={90} alt="wind" />
              <p className="relative text-center font-Poppins">Wind</p>
            </div>
            <div>
              <Image src="/biomass.png" height={90} width={90} alt="biomass" />
              <p className="relative text-center font-Poppins">Biomass</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
