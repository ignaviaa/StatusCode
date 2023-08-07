import React from 'react';


function Profile() {
    return (
        <div className="flex flex-col  items-center gap-4 font-Poppins">
            <div   className="w-[100px] h-[100px] rounded-full  bg-white" >

            </div>
            <div>
                Name
            </div>
            <button className=" border border-[#5CC94D] text-[#D9D9D9] rounded-[10vh] p-2 w-[90px] hover:border-[#79EC69] focus:outline-none  ">Edit</button>
        </div>

    );
}

export default Profile;