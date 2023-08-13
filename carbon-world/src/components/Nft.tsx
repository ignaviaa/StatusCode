import React from 'react'
import Image from 'next/image';

function Nft() {
  return (
    <div>
        <Image src="/forest.jpeg" alt="" width={180} height={180} className='rounded-lg' />
        <div className=' text-center m-5'> Nft name</div>
     
    </div>
  )
}
export default Nft;