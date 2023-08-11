"use client";
import Link from "next/link";

function NavItems({ data }) {
  return (
    <div className="flex flex-col mt-4 mx-10 py-8 text-[19px] mx-10">
      {data.map((item, index) => (
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
