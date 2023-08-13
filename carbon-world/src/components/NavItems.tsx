"use client";
import Link from "next/link";

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface NavItemsProps {
  data: NavItem[];
}

function NavItems({ data }: NavItemsProps) {
  return (
    <div className="mx-10 mt-4 flex flex-col py-8 text-[19px]">
      {data?.map((item, index) => (
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
