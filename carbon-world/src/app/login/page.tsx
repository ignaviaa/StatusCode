"use client";
import { FaUserTie } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { useRouter } from "next/navigation";

function Page() {
  const { push } = useRouter();
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#202123]">
      <div className="flex flex-row divide-x-2 divide-blue-50 font-Poppins">
        <div className="m-auto mr-5 pt-40 text-center ">
          <div
            className="h-[32vh] w-[20vw] rounded-3xl border border-[#54b946] pt-[30%] hover:cursor-pointer hover:bg-[#54b946] "
            onClick={() => {
              push("investorLogin");
            }}
          >
            <FaUserTie className="mx-auto h-10 w-10 fill-white" />
          </div>
          <p className="m-5 p-5 font-semibold">Investor</p>
        </div>
        <div className="m-auto ml-5 pl-10 pt-40 text-center">
          <div
            className="h-[32vh] w-[20vw] rounded-3xl border border-[#54b946] pt-[30%] hover:cursor-pointer hover:bg-[#54b946] "
            onClick={() => {
              push("ngoLogin");
            }}
          >
            <GiWorld className="mx-auto h-10 w-10" />
          </div>
          <p className="m-5 p-5 font-semibold">NGO</p>
        </div>
      </div>
    </div>
  );
}
export default Page;
