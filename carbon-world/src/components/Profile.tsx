import React from 'react';


function Profile() {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <div   className="w-[100px] h-[100px] rounded-full  bg-white" >

            </div>
            <div>
                Name
            </div>
            <button className=" border border-white bg-[#202020] text-[#D9D9D9] rounded-[10vh] p-2 w-[90px] hover:border-gray-600 focus:outline-none  ">Edit</button>
        </div>

    );
}

export default Profile;