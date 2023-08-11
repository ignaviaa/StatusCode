import React from "react";
import Image from "next/image";

function GlobalCards() {
  return (
    <>
      <div className="flex flex-row bg-[#202023] rounded-xl font-Poppins ">
       <div className="">
        <Image src="/forest.jpeg" width={250} height={220} alt="" className="h-[100%] w-40 rounded"/>
       </div>
       <div className=" m-4 ">
        <p className="text-lg">Project Name</p>
        <p className="text-sm">Description:</p>
       </div>
        

      </div>
    </>
  );
}

export default GlobalCards;