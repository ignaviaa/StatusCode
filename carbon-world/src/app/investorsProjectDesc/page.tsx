import React from 'react'
import SideBar from '@/components/SideBar';
import Image from 'next/image';

function page(){
  return (
    <>
   <div className=" flex min-h-screen flex-col bg-[#171819]  md:flex-row overflow-x-hidden">
        <div className="md:w-[20%]">
          <SideBar />
        </div>
        <div className=" flex h-screen w-screen flex-col">
          <div className="mx-5 flex items-center justify-between p-10 py-8">
            <span className="font-Poppins text-[28px] font-semibold text-white ">
           Marketplace
            </span>
          </div>

            <Image src="/biomass.png" alt="" width={500} height={500} className='h-[30%] w-screen'/>
            <h1 className='relative font-Poppins text-2xl mb-10 mt-10 ml-[4rem] font-semibold'>Project 1</h1>
            </div>

        
         
            </div>
      
         
     
 
            </>
  )
}

export default page;
