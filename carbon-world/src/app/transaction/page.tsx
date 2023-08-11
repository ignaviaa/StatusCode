import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import Transaction from "@/components/Transaction";

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
              Transaction
            </span>
          </div>

          <div className="mx-auto mb-5 grid h-[15vh] w-[76vw] grid-cols-3 space-x-1 divide-x divide-[#3F4042] rounded bg-[#202123] p-5 text-left font-Poppins text-[15px] text-gray-400">
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
          <div className="relative mx-10 p-5">
            <span className="font-Poppins text-[25px] font-semibold text-white">
              Recent History
            </span>
          </div>
          <div className="relative mx-10 flex flex-row gap-3 p-5">
            <button className="w-40 rounded-lg border border-white bg-[#202123] px-4 py-2 text-white hover:border-transparent hover:bg-[#5CC94D] hover:text-black">
              Contributors
            </button>
            <button className="w-40 rounded-lg border border-white bg-[#202123] px-4 py-2 text-white hover:border-transparent hover:bg-[#5CC94D] hover:text-black">
              Account
            </button>
          </div>
          <div className="m-5 flex w-[35vw] bg-[#171819]">
            <SearchBar placeholderDetails="Search for payments" width="30vw" />
          </div>
          <div className="relative mx-10 flex flex-col gap-2 px-5">
            <Transaction />
            <Transaction />
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
