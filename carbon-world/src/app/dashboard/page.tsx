"use client"
import SideBar from "@/components/SideBar";
import Cards from "@/components/Cards";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar";
import BarChart from "@/components/BarChart";
import Category from "@/components/Category";
import {ngoDashboard} from "@/constants/dashboard";
import {useEffect, useState} from "react";
import MyFormModal from "@/components/MyFormModal";
import Loading from "@/components/Loading";

function Page() {
    const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);
    return (
        <>
            {
                loading ? (<Loading/>) : (<>
                    <div className=" min-h-screen flex flex-col md:flex-row  bg-[#171819]">
                        <div className="md:w-[20%]">
                            <SideBar data={ngoDashboard}/>
                        </div>
                        <div className=" w-screen h-screen flex flex-col overflow-x-hidden">
                            <div className="flex items-center justify-between p-10 py-8 mx-5 ">
            <span className="text-white text-[25px] font-semibold font-Poppins ">
              Dashboard
            </span>
                                <div className="flex items-center bg-[#171819]">
                                    <SearchBar/>
                                </div>
                            </div>

                            <div
                                className="grid grid-cols-3 w-[76vw] h-[15vh] mx-auto mb-5 bg-[#202123] divide-x divide-[#3F4042] space-x-1 rounded p-5 font-Poppins text-gray-400 text-[15px]">
                                <div className=" justify-center flex flex-row items-center ">
                                    Amount{" "}
                                </div>
                                <div className="justify-center flex flex-row items-center ">
                                    Contributors{" "}
                                </div>
                                <div className="justify-center flex flex-row items-center ">
                                    Carbon Captured{" "}
                                </div>
                            </div>
                            <div className="grid grid-col-1 grid-flow-col mx-auto ">
                                <div>
                                    <Category/>
                                </div>
                                <div className="relative left-[2vh]">
                                    <BarChart/>
                                </div>
                            </div>
                            <div className="flex items-center p-10 py-5 mx-5">
            <span className="text-white text-[25px] font-semibold font-Poppins ">
              Projects
            </span>
                            </div>
                            <div className="grid grid-cols-3 gap-10 m-auto w-[75vw] mb-10">

                                <div onClick={() => setIsPopUpOpen(true)} className="w-[25vw] ">
                                    <AddButton/>
                                </div>

                                {isPopUpOpen &&
                                    <MyFormModal onDismiss={() => setIsPopUpOpen(false)}/>
                                }

                                {/*<div className="w-[25vw]  ">*/}
                                {/*    <Cards/>*/}
                                {/*</div>*/}
                                <div className="w-[25vw]  ">
                                    <Cards/>
                                </div>
                                <div className="w-[25vw]  ">
                                    <Cards/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </>
    );
}

export default Page;
