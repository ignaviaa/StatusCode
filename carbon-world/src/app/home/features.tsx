import React from "react";
import { FaUserTie } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { IoBagHandle } from "react-icons/io5";
import Timeline from "./timeline";

const Features = () => {
  return (
    <div className="h-[260vh] bg-gradient-to-b from-[#87BCDE] to-white font-Poppins ">
      <div className=" m-auto w-[80%] pt-[8rem] text-center text-xl text-gray-700">
        "Empower our planet's potential. Every small step you take towards our
        NGO projects resonates into a symphony of positive change for our
        environment and future generations."
      </div>
      <p className=" m-auto mt-10 text-center text-sm text-gray-700">
        Connect with us through EcoToken and encourage other projects.
      </p>
      <div className="ml-[10rem] mr-[10rem] mt-[4.5rem] flex h-[40vh] flex-row">
        <div className="m-auto h-[30vh] w-[20vw] rounded-2xl bg-[#5AAE58] drop-shadow-lg">
          <div className=" relative top-[35%] text-center">
            <FaUserTie className="h-auro  mx-auto h-10 w-10" />
            <p className="pt-5">Investors</p>
          </div>
        </div>
        <div className="m-auto h-[30vh] w-[20vw] rounded-2xl bg-[#5AAE58] drop-shadow-lg">
          <div className=" relative top-[35%] text-center">
            <GiWorld className="mx-auto  h-10 w-10" />
            <p className="pt-5">NGO</p>
          </div>
        </div>
        <div className="m-auto h-[30vh] w-[20vw] rounded-2xl bg-[#5AAE58] drop-shadow-lg">
          <div className=" relative top-[35%] text-center">
            <IoBagHandle className="mx-auto  h-10 w-10" />
            <p className="pt-5">Global Marketplace</p>
          </div>
        </div>
      </div>
      <div className="pt-[15vh]">
        <Timeline />3
      </div>
    </div>
  );
};

export default Features;
