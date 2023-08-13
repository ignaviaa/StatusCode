import React from "react";
import { useRouter } from "next/navigation";
function Homenav() {
  const { push } = useRouter();
  return (
    <div className=" sticky flex h-10 flex-row items-center bg-white p-10 font-Poppins text-black">
      <div className="text-3xl font-semibold text-[#54b946]">EcoToken</div>
      <div className="relative left-[60%] flex flex-row items-center gap-6">
        <p className="cursor-pointer rounded-lg p-2 hover:bg-[#80c777]">
          Our Approach
        </p>
        <p
          className="cursor-pointer rounded-lg p-2 hover:bg-[#80c777]"
          onClick={() => {
            push("globalMarketplace");
          }}
        >
          Marketplace
        </p>
        <button
          className=" rounded-lg bg-[#54b946] p-3 font-Poppins text-white"
          onClick={() => {
            push("login");
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Homenav;
