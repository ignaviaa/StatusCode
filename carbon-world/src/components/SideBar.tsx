"use client";
import React from "react";
import Profile from "@/components/Profile";
import NavItems from "@/components/NavItems";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";

function SideBar({ data }: any) {
  const { connected, publicKey } = useWallet();
  return (
    <div className=" fixed flex  h-full flex-col bg-[#202123] ">
      <div className=" px-[85px] py-[50px] font-Poppins">CarbonCoin</div>

      <div className="">
        <Profile />
        <NavItems
          data={data}
          connected={connected}
          publicKey={publicKey as PublicKey}
        />
      </div>
    </div>
  );
}

export default SideBar;
