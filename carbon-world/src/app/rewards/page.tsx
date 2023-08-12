"use client"
import SideBar from "@/components/SideBar";
import Cards from "@/components/Cards";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar";
import BarChart from "@/components/BarChart";
import Category from "@/components/Category";
import {ngoDashboard} from "@/constants/dashboard";


function Page() {


    return (
        <>
            <div className=" min-h-screen flex flex-col md:flex-row  bg-[#171819]">
                <div className="md:w-[20%]">
                    <SideBar data={ngoDashboard}/>
                </div>
                <div className=" w-screen h-screen flex flex-col overflow-x-hidden">
                    <div className="flex items-center justify-between p-10 py-8 mx-5 ">
            <span className="text-white text-[25px] font-semibold font-Poppins ">
              Rewards
            </span>
                        <div className="flex items-center bg-[#171819]">
                            <SearchBar/>
                        </div>
                    </div>


                    <div className="grid grid-col-1 grid-flow-col  ml-14">
                        <div>
                            <Category/>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}

export default Page;
