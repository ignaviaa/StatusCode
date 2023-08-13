import React from "react";
import { FaUserTie } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { IoBagHandle } from "react-icons/io5";
import Timeline from "./timeline";
import { useRouter } from "next/navigation";

const Features = () => {
  const { push } = useRouter();
  return (
    <div className="h-[260vh] bg-gradient-to-b from-[#87BCDE] to-white font-Poppins ">
      <div className=" m-auto w-[80%] pt-[8rem] text-center text-xl text-gray-700">
        &quot;Empower our planet&apos;s potential. Every small step you take
        towards our NGO projects resonates into a symphony of positive change
        for our environment and future generations.&quot;
      </div>
      <div className="pt-[9vh]">
        <Timeline />
      </div>
      <div className="h-[100vh] bg-white p-20">
        <h3 className="m-auto items-center justify-center  p-10 pb-10 text-center text-4xl font-bold text-gray-700">
          Getting Started
          <hr className=" mt-10 h-[3px] bg-amber-950" />
        </h3>
        <div className="ml-[10rem] mr-[10rem] flex h-[40vh] flex-row pt-[4.5rem]">
          <div
            className="m-auto h-[30vh] w-[20vw] cursor-pointer rounded-2xl bg-[#A2663E] drop-shadow-lg hover:bg-[#54433A]"
            onClick={() => {
              push("investorLogin");
            }}
          >
            <div className=" relative top-[35%] text-center">
              <FaUserTie className="mx-auto  h-10 w-10" />
              <p className="pt-5 text-lg">Investors</p>
            </div>
          </div>
          <div
            className="m-auto h-[30vh] w-[20vw] cursor-pointer rounded-2xl bg-[#5CC94D] drop-shadow-lg hover:bg-[#408251]"
            onClick={() => {
              push("ngoLogin");
            }}
          >
            <div className=" relative top-[35%] text-center">
              <GiWorld className="mx-auto  h-10 w-10" />
              <p className="pt-5 text-lg">NGO</p>
            </div>
          </div>
          <div
            className="m-auto h-[30vh] w-[20vw] cursor-pointer rounded-2xl bg-[#DD817E] drop-shadow-lg hover:bg-[#C45258]"
            onClick={() => {
              push("globalMarketplace");
            }}
          >
            <div className=" relative top-[35%] text-center">
              <IoBagHandle className="mx-auto  h-10 w-10" />
              <p className="pt-5 text-lg">Global Marketplace</p>
            </div>
          </div>
        </div>
        <div className="m-auto h-[2px] p-20 text-center text-gray-700">
          Join the EcoToken Revolution:
          <br /> Connecting People to Carbon-Positive Change!
        </div>
      </div>
    </div>
  );
};

export default Features;
