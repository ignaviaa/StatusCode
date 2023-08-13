import React from 'react'
import GlobalNav from '@/components/globalNav';
import Nft from '@/components/Nft';
import Image from "next/image";

function page(){
  return (
    <div className='bg-[#171819] h-full w-screen pb-20'>
        <GlobalNav />
        <div className=' w-screen'>
            <Image src="/biomass.png" width={500} height={500} alt="" className='w-screen h-[30vh] bg-cover'/>
            <h1 className='relative ml-10 font-Poppins text-4xl mb-10 mt-10'>Project 1</h1>
            {/* <Catediv /> */} 

        </div>
        <div className="grid grid-cols-2 gap-2 mx-5 mt-5">
        <div className='h-[80vh] bg-[#202123] rounded-xl overflow-y-scroll font-Poppins'>
          <div className='m-8 text-2xl font-bold'>NFT Collection 
          </div>
          <div className='m-8 grid grid-cols-3 gap-10 w-[90%]'>
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          <Nft />
          </div>
       
          </div>
          <div className='h-[80vh] bg-[#202123] rounded-xl font-Poppins text-lg'>
          <div className='m-8'>Description:</div>
          <div className='m-8'>Project Lead:</div>
          <div className='m-8'>Location:</div>
          <div className='m-8'>Funding Raised:</div>
          <div className='m-8'>Carbon Captured:</div>
          </div>
        </div>
    </div>
  )
}

export default page;
