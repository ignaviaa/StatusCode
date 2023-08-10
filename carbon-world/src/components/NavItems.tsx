"use client";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import Link from "next/link";

function NavItems() {
<<<<<<< HEAD
    const [sidebarItems] = useState([
        { icon: <BiSolidDashboard />, label: 'Dashboard', href: '/dashboard' },
        { icon: <AiOutlineTransaction />, label: 'Transaction', href: '/transaction' },
        { icon: <SlGraph />, label: 'Analytics', href: '/analytics' },
        { icon: <BiLogOut />, label: 'Log Out', href: '/home' },
    ]);
=======
  const [sidebarItems] = useState([
    { icon: <BiSolidDashboard />, label: "Dashboard", href: "/dashboard" },
    {
      icon: <AiOutlineTransaction />,
      label: "Transaction",
      href: "/transaction",
    },
    { icon: <SlGraph />, label: "Analytics", href: "/analytics" },
    { icon: <BiLogOut />, label: "Log Out", href: "/" },
  ]);
>>>>>>> c6a2970 (Made changed to the test branch)

  return (
    <div className="flex flex-col mt-4 mx-10 py-8 text-[19px]">
      {sidebarItems.map((item, index) => (
        <Link
          key={index}
          className="flex items-center gap-3 p-2 m-2 hover:bg-[#5CC94D] hover:text-black hover:rounded hover:w-[10rem]"
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
