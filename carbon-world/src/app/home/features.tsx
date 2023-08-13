import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import {IoBagHandle} from "react-icons/io5"
import Timeline from './timeline'

const Features = () => {
  return (
    <div className='h-[260vh] font-Poppins bg-gradient-to-b from-[#87BCDE] to-white '>
      <div className=' text-center m-auto text-xl text-gray-700 pt-[8rem] w-[80%]'>"Empower our planet's potential. Every small step you take towards our NGO projects resonates into a symphony of positive change for our environment and future generations."</div>
      <p className=' text-center m-auto text-sm text-gray-700 mt-10'>Connect with us through EcoToken and encourage other projects.</p>
      <div className="flex flex-row h-[40vh] ml-[10rem] mr-[10rem] mt-[4.5rem]">
      <div className='h-[30vh] w-[20vw] rounded-2xl m-auto bg-[#5AAE58] drop-shadow-lg'>
        <div className=' text-center relative top-[35%]'>
          <FaUserTie className="mx-auto  w-10 h-10 h-auro" />
          <p className='pt-5'>Investors</p></div>
          </div>
        <div className='h-[30vh] w-[20vw] rounded-2xl m-auto bg-[#5AAE58] drop-shadow-lg'>
        <div className=' text-center relative top-[35%]'>
          <GiWorld className="mx-auto  w-10 h-10" />
          <p className='pt-5'>NGO</p></div>
          </div>
        <div className='h-[30vh] w-[20vw] rounded-2xl m-auto bg-[#5AAE58] drop-shadow-lg'>
        <div className=' text-center relative top-[35%]'>
          <IoBagHandle className="mx-auto  w-10 h-10" />
          <p className='pt-5'>Global Marketplace</p>
          </div></div>
        </div>
        <div className='pt-[15vh]'>
        <Timeline/>3
        </div>
    </div>
  )
}

export default Features