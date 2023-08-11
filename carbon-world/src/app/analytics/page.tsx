import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import BarChart from "@/components/BarChart";
function Page() {
  return (
    <>
      <div className="flex h-screen flex-col bg-[#171819] md:flex-row">
        <div className="md:w-[20%]">
          <SideBar />
        </div>
        <div className=" flex h-screen w-screen flex-col">
          <div className="mx-5 flex items-center justify-between p-10 py-8">
            <span className="font-Poppins text-[25px] font-semibold text-white ">
              Analytics
            </span>
            <div className="flex items-center bg-[#171819]">
              <SearchBar placeholderDetails="Search ..." width="20%" />
            </div>
          </div>
          <div>
            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
