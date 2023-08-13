"use client";
import Link from "next/link";
import { PublicKey } from "@solana/web3.js";
require("@solana/wallet-adapter-react-ui/styles.css");
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { truncate } from "@/utils/string";

interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

interface NavItemsProps {}

interface NavbarProps {
  connected: boolean;
  publicKey: PublicKey;
  data: NavItem[];
}

function NavItems({ connected, publicKey, data }: NavbarProps) {
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
      <WalletMultiButton
        startIcon={
          <UserCircleIcon style={{ height: 32, width: 32, color: "#d0d0d1" }} />
        }
      >
        <span className="text-base font-semibold text-slate-200">
          {connected ? truncate(publicKey.toString()) : "Connect Wallet"}
        </span>
      </WalletMultiButton>
    </div>
  );
}

export default NavItems;
