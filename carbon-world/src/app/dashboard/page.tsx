"use client"
import SideBar from "@/components/SideBar";
import Cards from "@/components/Cards";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar";
import BarChart from "@/components/BarChart";
import Category from "@/components/Category";

function Page() {
  return (
    <>
      <div className=" flex min-h-screen flex-col bg-[#171819]  md:flex-row overflow-x-hidden">
        <div className="md:w-[20%]">
          <SideBar />
        </div>
        <div className=" flex h-screen w-screen flex-col">
          <div className="mx-5 flex items-center justify-between p-10 py-8">
            <span className="font-Poppins text-[25px] font-semibold text-white ">
              Dashboard
            </span>
            <div className="flex items-center bg-[#171819]">
              <SearchBar placeholderDetails="Search for project" width="20vw" />
            </div>
          </div>

          <div className="mx-auto mb-5 grid h-[15vh] w-[76vw] grid-cols-3 space-x-1 divide-x divide-[#3F4042] rounded bg-[#202123] p-5 font-Poppins text-[15px] text-gray-400">
            <div className=" flex flex-row items-center justify-center ">
              Amount{" "}
            </div>
            <div className="flex flex-row items-center justify-center ">
              Contributors{" "}
            </div>
            <div className="flex flex-row items-center justify-center ">
              Carbon Captured{" "}
            </div>
          </div>
          <div className="grid-col-1 mx-auto grid grid-flow-col ">
            <div>
              <Category />
            </div>
            <div className="relative left-[2vh]">
              <BarChart />
            </div>
          </div>
          <div className="mx-5 flex items-center p-10 py-5">
            <span className="font-Poppins text-[25px] font-semibold text-white ">
              Projects
            </span>
          </div>
          <div className="space-x m-auto mb-10 grid w-[75vw] grid-cols-3 gap-10">
            <div className="w-[20vw]  ">
              <AddButton />
            </div>
            <div className="w-[20vw]  ">
              <Cards />
            </div>
            <div className="w-[20vw] ">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
