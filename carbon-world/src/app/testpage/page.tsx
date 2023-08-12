"use client";
import Navbar from "@/components/Navbar";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRefi } from "@/hooks/useRefi";
import { PublicKey } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";
import { clsx } from "clsx";
import Test from "@/components/Test";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const { connected, publicKey } = useWallet();
  const typeOfAccount = "NGO";

  const { initialized, initializeUser, addNgoAccount, test } = useRefi({
    typeOfAccount,
  });
  return (
    <div>
      {/* <Navbar
        connected={connected}
        publicKey={publicKey as PublicKey}
        initialized={initialized}
        initializeUser={initializeUser}
      />
      <p onClick={() => test({ hi: "etr" })}>test here</p> */}
      <Test />
    </div>
  );
};

export default Page;
