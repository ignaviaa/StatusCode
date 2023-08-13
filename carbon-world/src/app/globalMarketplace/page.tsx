import React from 'react'
import GlobalNav from '@/components/globalNav';
import SearchBar from '@/components/SearchBar';
import GlobalCards from '@/components/globalCard';


function page() {
  return (
    <>
    <div className='bg-[#171819] h-screen w-screen '>
        <div className="flex flex-row items-center bg-[#202023] ">
    <GlobalNav />
    <div className='pl-[33%]'>
    <SearchBar  placeholderDetails="Search for projects" width='30px' />
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
    
       
    </div>
    </>
  )
}
export default page;
