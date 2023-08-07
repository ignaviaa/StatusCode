import React from 'react';
import Image from 'next/image'

function Category() {
    return (
        <><div className="w-[28vw] rounded-[0.5rem] overflow-hidden shadow-lg bg-[#202123] relative h-[40vh] ">
            <div className="px-5 py-4">
                <span className="font-bold text-xl mb-2 text-white font-Poppins ">Category</span>
                <div className="grid grid-cols-4">
                   <div className='rounded'>
                    <Image
                    src="/forest.jpeg" 
                    height={90}
                    width={90}  />
                    <p className='relative text-center bottom-[50%] font-Poppins'>Forest</p>
                   </div>

                   <div>
                   <Image
                    src="/water.jpeg" 
                    height={90}
                    width={90} />
                    <p className='relative text-center bottom-[50%] font-Poppins'>Water</p>
                   </div>
                   <div>
                   <Image
                    src="/wind.jpeg" 
                    height={90}
                    width={90} />
                     <p className='relative text-center font-Poppins'>Wind</p>
                   </div>
                   <div>
                   <Image
                    src="/biomass.png" 
                    height={90}
                    width={90} />
                     <p className='relative text-center font-Poppins'>Biomass</p>
                   </div>
                </div>
            </div>
        </div>


        </>

    );
}

export default Category;