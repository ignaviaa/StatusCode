import React from 'react'
import SideBar from '@/components/SideBar';
import SearchBar from '@/components/SearchBar';
import GlobalCards from '@/components/globalCard';


function Page() {
  return (
    <>
    <div className=" flex min-h-screen flex-col bg-[#171819]  md:flex-row overflow-x-hidden">
        <div className="md:w-[20%]">
          <SideBar />
            </div>
        <div className=" flex h-screen w-screen flex-col">
          <div className="mx-5 flex items-center justify-between p-10 py-8">
            <span className="font-Poppins text-[25px] font-semibold text-white ">
              Marketplace
            </span>
            <div className="flex items-center bg-[#171819]">
              <SearchBar placeholderDetails="Search for projects" width="10vw" />
            </div>
            </div>
            <div className='grid grid-cols-2 gap-5 m-10 pl-5 justify-center '>
        <div>
            <GlobalCards />
        </div>
        <div>
            <GlobalCards />
        </div>
        <div>
            <GlobalCards />
        </div>
    </div>
          </div>
        
        </div>



    {/* <div className='bg-[#171819] h-screen w-screen '>
        <div className="flex flex-row items-center bg-[#202023] ">
    <SideBar />
    <div className='pl-[33%]'>
    <SearchBar  placeholderDetails="Search for projects" width='30'/>
    </div>
    </div>
    <p className=' font-Poppins text-2xl ml-10 mt-10'>Marketplace</p>
    <div className='grid grid-cols-3 gap-5 m-10 '>
        <div>
            <GlobalCards />
        </div>
        <div>
            <GlobalCards />
        </div>
        <div>
            <GlobalCards />
        </div>


    </div>
    
       
    </div> */}
    </>
  )
}
export default Page;
