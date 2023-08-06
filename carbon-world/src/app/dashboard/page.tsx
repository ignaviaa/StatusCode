import SideBar from "@/components/SideBar";
import DashBoardNav from "@/components/DashBoardNav";
import Cards from "@/components/Cards";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar";

function Page() {
    return (
        <>

            <div className="  flex flex-col md:flex-row h-screen">
                <div className="w-full md:w-[20%]">
                    <SideBar />
                </div>
                <div className=" w-screen h-screen flex flex-col">
                    <div className="flex items-center justify-between p-10">
                        <span className="text-white text-[25px] font-semibold font-Poppins ">Dashboard</span>
                        <div className="flex items-center bg-black">
                            <SearchBar/>
                        </div>
                    </div>

                    <div className="grid grid-cols-3">
                        <div className="flex justify-center items-center m-3">
                            <AddButton />
                        </div>
                        <div className="flex justify-center items-center m-3">
                            <Cards />
                        </div>
                        <div className="flex justify-center items-center m-3">
                            <Cards />
                        </div>
                        {/* <div className="flex justify-center items-center">
                            <Cards />
                        </div> */}
                    </div>
                </div>

            </div>

        </>

    );
}

export default Page;