import SideBar from "@/components/SideBar";
import DashBoardNav from "@/components/DashBoardNav";
import Cards from "@/components/Cards";
import AddButton from "@/components/AddButton";
import SearchBar from "@/components/SearchBar";

function Page() {
    return (
        <>

            <div className="bg-[#333533] flex flex-col md:flex-row h-screen">
                <div className="w-full md:w-[18.5%]">
                    <SideBar />
                </div>
                <div className="bg-[#333533] w-screen h-screen flex flex-col">
                    <div className="flex items-center justify-between bg-gray-800 p-4">
                        <span className="text-white text-lg font-semibold">Dashboard</span>
                        <div className="flex items-center">
                            <SearchBar/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 p-8">
                        <div className="flex justify-center items-center">
                            <AddButton />
                        </div>
                        <div className="flex justify-center items-center">
                            <Cards />
                        </div>
                        <div className="flex justify-center items-center">
                            <Cards />
                        </div>
                        <div className="flex justify-center items-center">
                            <Cards />
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
}

export default Page;