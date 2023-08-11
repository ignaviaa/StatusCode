"use client";
import { FC } from "react";
import { GlobeAmericasIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { truncate } from "@/utils/string";
import styles from "@/styles/wallet.module.css";
import { PublicKey } from "@solana/web3.js";
import Link from "next/link";
require("@solana/wallet-adapter-react-ui/styles.css");

interface NavbarProps {
  connected: boolean;
  publicKey: PublicKey;
  initializeUser: Function;
  initialized: boolean;
}

const Navbar: FC<NavbarProps> = ({
  connected,
  publicKey,
  initializeUser,
  initialized,
}) => {
  return (
    <header className="sticky top-0 z-50 items-center border-b bg-white px-10 py-4 transition-all md:grid md:grid-cols-3 xl:px-10 drop-shadow-2xl">
      <div>
        <p className="cursor-pointer bg-transparent px-4 text-lg font-medium text-gray-800">
          CarbonWorld
        </p>
      </div>

      <div className="flex flex-1 px-6 transition-all duration-300 xl:justify-center">
       <p className="cursor-pointer rounded-full bg-transparent px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100">
        </p>
        <p className="cursor-pointer rounded-full bg-transparent px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100">
          Impact
        </p>
        <p className="cursor-pointer rounded-full bg-transparent px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100">
          Solution
        </p>
        <p className="cursor-pointer rounded-full bg-transparent px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-100">
          MarketPlace
  </p>
  
      </div> 

      <div className="flex items-center justify-end">
        {initialized ? (
          <></>
        ) : (
          <button
            className="mr-2 cursor-pointer rounded-full border border-transparent px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100"
            onClick={() => initializeUser()}
          >
            Initialize
          </button>
        )}

        <WalletMultiButton
          startIcon={
            <UserCircleIcon
              style={{ height: 32, width: 32, color: "#d0d0d1" }}
            />
          }
        >
          <span className="text-base font-semibold text-slate-200">
            {connected ? truncate(publicKey.toString()) : "Connect Wallet"}
          </span>
        </WalletMultiButton>
      </div>
    </header>
  );
};

export default Navbar;
