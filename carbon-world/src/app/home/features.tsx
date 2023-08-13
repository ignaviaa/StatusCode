import React from 'react'
import { FaUserTie } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import {IoBagHandle} from "react-icons/io5"
import Timeline from './timeline'

const Features = () => {
  return (
    <div className='h-[260vh] font-Poppins bg-gradient-to-b from-[#87BCDE] to-white '>
      <div className=' text-center m-auto text-xl text-gray-700 pt-[8rem] w-[80%]'>"Empower our planet's potential. Every small step you take towards our NGO projects resonates into a symphony of positive change for our environment and future generations."</div>
        <div className='pt-[8vh]'>
        <Timeline/>
        </div>
    </div>
  )
}

export default Features