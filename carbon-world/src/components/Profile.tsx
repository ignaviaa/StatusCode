import React from 'react';


function Profile() {
    return (
        <div className="flex flex-col  items-center gap-4 font-Poppins">
            <div   className="w-[100px] h-[100px] rounded-full  bg-white" >

            </div>
            <div>
                Name
            </div>
            <button className=" border border-white text-[#D9D9D9] rounded-[10vh] p-2 w-[90px] hover:bg-[#5CC94D] hover:border-transparent hover:text-black focus:outline-none  ">Edit</button>
        </div>

    );
}

export default Profile;