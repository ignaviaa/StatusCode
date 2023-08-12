import React from 'react';
import SideBar from '@/components/SideBar';
import SearchBar from '@/components/SearchBar';
import CategoryBarChartPairGroup from "@/components/CategoryBarChartPairGroup";
  // Import the new reusable component

function Page() {
    const data = new Array(2).fill(null); // Create an array with a length of 2 (can be adjusted as needed)

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-[#171819]">
                <div className="md:w-[20%]">
                    <SideBar />
                </div>
                <div className="w-screen h-screen flex flex-col">
                    <div className="flex items-center justify-between p-10 py-8 mx-5">
                        <span className="text-white text-[25px] font-semibold font-Poppins">Analytics</span>
                        <div className="flex items-center bg-[#171819]">
                            <SearchBar />
                        </div>
                    </div>
                    <
                        CategoryBarChartPairGroup data={data} />
                </div>
            </div>
        </>
    );
}

export default Page;
