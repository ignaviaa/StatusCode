import React from 'react';
import {BiLogOut} from "react-icons/bi";
import Link from "next/link";
import {AiOutlineTransaction} from "react-icons/ai";
import {LuLayoutDashboard} from "react-icons/lu";

function NavItems() {
    return (
        <>
            <div className="flex flex-col mt-4 ">

                <Link className="flex justify-center items-center hover:bg-[#4D4D4D] hover:rounded  m-2 gap-2 p-2" href={"/"}>
                    <LuLayoutDashboard/> Dashboard
                </Link>

                <Link className="flex justify-center items-center hover:bg-[#4D4D4D] hover:rounded  m-2 gap-2 p-2 " href={"/"}>
                    <AiOutlineTransaction/> Transaction
                </Link>
                <Link className="flex justify-center items-center m-2  gap-2 hover:bg-[#4D4D4D] hover:rounded  p-2" href={"/"}>
                    <BiLogOut/>Log Out
                </Link>
            </div>
        </>


    );
}

export default NavItems;