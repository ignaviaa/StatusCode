"use client";
import Navbar from "@/components/Navbar";
import { useRefi } from "@/hooks/useRefi";

import { useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { FC, useEffect, useState } from "react";

interface pageProps {}

const test = {
  idx: 3,
  nameOfProject: "tes",
  startYear: "test",
  projectLead: "test",
  location: "test",
  category: "tst",
  description: "tew",
  fundingRaised: "twte",
  projectImage: "tawte",
  carbonCaptured: 55,
};

const Page: FC<pageProps> = ({}) => {
  const typeOfAccount = "NGO";
  const { connected, publicKey } = useWallet();
  const { addProject, initialized, initializeUser } = useRefi({
    typeOfAccount,
  });

  return (
    <div>
      <Navbar
        connected={connected}
        publicKey={publicKey as PublicKey}
        initialized={initialized}
        initializeUser={initializeUser}
      />
      <p onClick={() => addProject(test)}>Just test</p>
    </div>
  );
};

export default Page;
