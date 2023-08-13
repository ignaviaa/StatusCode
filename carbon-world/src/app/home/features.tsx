import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import {IoBagHandle} from "react-icons/io5"
import Timeline from './timeline'

const Features = () => {
  return (
    <div className='h-[260vh] font-Poppins bg-gradient-to-b from-[#87BCDE] to-white '>
      <div className=' text-center m-auto text-xl text-gray-700 pt-[8rem] w-[80%]'>"Empower our planet's potential. Every small step you take towards our NGO projects resonates into a symphony of positive change for our environment and future generations."</div>        
        <div className='pt-[9vh]'>
        <Timeline/>
        </div>
     <div className='h-[100vh] bg-white p-20'>
      <h3 className='text-gray-700 m-auto p-10  items-center justify-center text-center font-bold pb-10 text-4xl'>Getting Started<hr className=' h-[3px] bg-amber-950 mt-10'/></h3>
        <div className="flex flex-row h-[40vh] ml-[10rem] mr-[10rem] pt-[4.5rem]">
      <div className='h-[30vh] w-[20vw] rounded-2xl m-auto bg-[#A2663E] drop-shadow-lg cursor-pointer hover:bg-[#54433A]'>
        <div className=' text-center relative top-[35%]'>
          <FaUserTie className="mx-auto  w-10 h-10" />
          <p className='pt-5 text-lg'>Investors</p></div>
          </div>
        <div className='h-[30vh] w-[20vw] rounded-2xl m-auto bg-[#5CC94D] drop-shadow-lg cursor-pointer hover:bg-[#408251]'>
        <div className=' text-center relative top-[35%]'>
          <GiWorld className="mx-auto  w-10 h-10" />
          <p className='pt-5 text-lg'>NGO</p></div>
          </div>
        <div className='h-[30vh] w-[20vw] rounded-2xl m-auto bg-[#DD817E] drop-shadow-lg cursor-pointer hover:bg-[#C45258]'>
        <div className=' text-center relative top-[35%]'>
          <IoBagHandle className="mx-auto  w-10 h-10" />
          <p className='pt-5 text-lg'>Global Marketplace</p>
          </div></div>
        </div>
        <div className='text-gray-700 p-20 m-auto text-center h-[2px]'>
          Join the EcoToken Revolution:<br /> Connecting People to Carbon-Positive Change!
        </div>
        </div>
        
  
    </div>
  )
}

export default Features