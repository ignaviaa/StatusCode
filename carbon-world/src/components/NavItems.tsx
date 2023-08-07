import React from 'react';
import {BiLogOut} from "react-icons/bi";
import Link from "next/link";
import {AiOutlineTransaction} from "react-icons/ai";
import {LuLayoutDashboard} from "react-icons/lu";
import {BiSolidDashboard} from "react-icons/bi";
import {SlGraph} from "react-icons/sl"

function NavItems() {
    return (
        <>
            <div className="flex flex-col mt-4 mx-10 py-8 text-[19px] mx-10">

            <Link className="flex items-center gap-3 p-2 m-2 hover:bg-[#5CC94D] hover:text-black hover:rounded hover:w-[10rem] " href={"/"}>
                <BiSolidDashboard/> Dashboard
            </Link>

            <Link className="flex items-center hover:bg-[#5CC94D] hover:rounded hover:text-black hover:w-[10rem] gap-3 p-2 m-2" href={"/"}>
                <AiOutlineTransaction/> Transaction
            </Link>
            <Link className="flex items-center hover:bg-[#5CC94D] hover:rounded hover:text-black hover:w-[10rem] gap-3 p-2 m-2" href={"/"}>
                <SlGraph/> Analytics
            </Link>
                <Link className="flex items-center  gap-3 hover:bg-[#5CC94D] hover:text-black hover:rounded hover:w-[10rem] p-2 m-2" href={"/"}>
                    <BiLogOut/>Log Out
                </Link>
            </div>
        </>


    );
}

export default NavItems;