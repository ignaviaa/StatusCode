import React from 'react'

function Navbar() {
  return (
    <div className=' bg-white text-black p-6 font-Poppins flex gap-3'>
    
        <p>CarbonCoin</p>
        <div className="relative flex flex-row gap-10 text-right left-[50%]">
        <p>Our approach</p>
        <p>Impact</p>
        <p>Solution</p>
        <p>Marketplace</p>
        <p className="flex">Login</p>
        </div>

    </div>
  )
}

export default Navbar;