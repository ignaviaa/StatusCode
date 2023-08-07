import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";

function Page() {
    return (
        <>
         <div className="  flex flex-col md:flex-row h-screen bg-[#171819]">
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

                    <div className="grid grid-cols-3 w-[76vw] h-[15vh] mx-auto mb-5 bg-[#202123] divide-x divide-[#3F4042] space-x-1 rounded p-5 font-Poppins text-gray-400 text-left text-[15px]">
                        <div className=" justify-center flex flex-row items-center ">
                            Amount </div>
                            <div className="justify-center flex flex-row items-center ">
                            Contributors </div>
                            <div className="justify-center flex flex-row items-center ">
                            Carbon Captured </div>
                           
                       
                    
                    </div>
                    </div>
                    </div>
                    </>
  )
}

export default Page;