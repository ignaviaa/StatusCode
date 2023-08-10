import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import BarChart from "@/components/BarChart";
function Page() {
  return (
      <>
       <div className="  flex flex-col md:flex-row h-screen bg-[#171819]">
              <div className="md:w-[20%]">
                  <SideBar />
              </div>
              <div className=" w-screen h-screen flex flex-col">
                  <div className="flex items-center justify-between p-10 py-8 mx-5">
                      <span className="text-white text-[25px] font-semibold font-Poppins ">Analytics</span>
                      <div className="flex items-center bg-[#171819]">
                            <SearchBar/>
                        </div>
                  </div>
                  <div>
                    <BarChart />
                  </div>
                  </div>
                  </div>
                  
                  
                  </>
)
}

export default Page;