"use client";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import Link from "next/link";

function NavItems() {
  const [sidebarItems] = useState([
    { icon: <BiSolidDashboard />, label: "Dashboard", href: "/dashboard" },
    {
      icon: <AiOutlineTransaction />,
      label: "Transaction",
      href: "/transaction",
    },
    { icon: <SlGraph />, label: "Analytics", href: "/analytics" },
    { icon: <BiLogOut />, label: "Log Out", href: "/home" },
  ]);

  return (
    <div className="mx-10 mt-4 flex flex-col py-8 text-[19px]">
      {sidebarItems.map((item, index) => (
        <Link
          key={index}
          className="m-2 flex items-center gap-3 p-2 hover:w-[10rem] hover:rounded hover:bg-[#5CC94D] hover:text-black"
          href={item.href}
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default NavItems;
