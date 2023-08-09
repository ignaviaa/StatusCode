import SideBar from "@/components/SideBar";
import DashBoardNav from "@/components/DashBoardNav";
import Cards from "@/components/Cards";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar";
import BarChart from "@/components/BarChart";
import Category from "@/components/Category";

function Page() {
    return (
        <>

            <div className=" min-h-screen flex flex-col md:flex-row  bg-[#171819]">
                <div className="md:w-[20%]">
                    <SideBar />
                </div>
                <div className=" w-screen h-screen flex flex-col">
                    <div className="flex items-center justify-between p-10 py-8 mx-5">
                        <span className="text-white text-[25px] font-semibold font-Poppins ">Dashboard</span>
                        <div className="flex items-center bg-[#171819]">
                            <SearchBar/>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 w-[76vw] h-[15vh] mx-auto mb-5 bg-[#202123] divide-x divide-[#3F4042] space-x-1 rounded p-5 font-Poppins text-gray-400 text-[15px]">
                        <div className=" justify-center flex flex-row items-center ">
                            Amount </div>
                            <div className="justify-center flex flex-row items-center ">
                            Contributors </div>
                            <div className="justify-center flex flex-row items-center ">
                            Carbon Captured </div>
                           
                       
                    
                    </div>
                     <div className="grid grid-col-1 grid-flow-col mx-auto ">
                     <div>
                            <Category />
                        </div>
                        <div className="relative left-[2vh]">
                        <BarChart/>
                        </div>
                      
                    </div> 
                    <div className="flex items-center p-10 py-5 mx-5">
                    <span className="text-white text-[25px] font-semibold font-Poppins ">Projects</span>
                    </div>
                    <div className="grid grid-cols-3 gap-10 m-auto w-[75vw] space-x mb-10">
                        <div className="w-[25vw]  ">
                            <AddButton />
                        </div>
                        <div className="w-[25vw]  ">
                            <Cards />
                        </div>
                        <div className="w-[25vw] ">
                            <Cards />
                        </div>
                    </div>
            
                </div>

            </div>

        </>

    );
}

export default Page;