import React from 'react';
import {BiLogOut} from "react-icons/bi";
import Link from "next/link";
import {AiOutlineTransaction} from "react-icons/ai";
import {LuLayoutDashboard} from "react-icons/lu";

function NavItems() {
    return (
        <div className="flex flex-col">

            <Link href={"/"}>
                <LuLayoutDashboard/> Dashboard
            </Link>

            <Link href={"/"}>
                <AiOutlineTransaction/> Transaction
            </Link>
            <Link href={"/"} >
                <BiLogOut/> Logout
            </Link>
        </div>
    );
}

export default NavItems;